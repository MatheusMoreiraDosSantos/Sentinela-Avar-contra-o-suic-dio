"use client";
import React, { useState } from "react";
import { multipleChoiceQuestions } from "../constants/questions";
import NextButton from "@/componnents/buttons/NextButton";
import BackButton from "@/componnents/buttons/BackButton";
import SubmitButton from "@/componnents/buttons/SubmitButton";
import Avatar from "./avatar";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import createReport from "@/services/createReport";
import { IQuestionsAnswered } from "@/interfaces/IReport";

const questionsNotFound = !multipleChoiceQuestions.length;

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [answersSelected, setAnswersSelected] = React.useState<
    IQuestionsAnswered[]
  >([]);

  const handleOptionChange = (option: string) => {
    setAnswersSelected((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = {
        question: multipleChoiceQuestions[index].question,
        answer: option,
      };
      return updatedAnswers;
    });
  };

  const renderQuestionByIndex = (index: number) => {
    const { question, options, type } = multipleChoiceQuestions[index];

    const renderOptions = () => {
      if (!options.length) return;
      return options.map((option, optionIndex) => (
        <div className="optionContainer" key={optionIndex}>
          <input
            type="radio"
            id={`option-${index}-${optionIndex}`}
            name={`question-${index}`}
            value={option}
            checked={answersSelected[index]?.answer === option}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
        </div>
      ));
    };

    const renderInputText = () => {
      const handleChangeAdress = (adress: string) => {
        setAnswersSelected((prevAnswers) => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[index] = {
            question: multipleChoiceQuestions[index].question,
            answer: adress,
          };
          return updatedAnswers;
        });
      };
      return (
        <input
          className="input-adress"
          onChange={(e) => handleChangeAdress(e.target.value)}
          value={answersSelected[index]?.answer || ""}
          type="text"
        />
      );
    };

    const renderQuestion = () => {
      if (type === "multiple choice") {
        return renderOptions();
      }
      if (type === "text") {
        return renderInputText();
      }
    };

    return (
      <fieldset className="question">
        <span>{index + 1}/12</span>
        <p>{question}</p>
        {renderQuestion()}
      </fieldset>
    );
  };

  const handleNextClick = () => {
    setIndex(index + 1);
  };

  const handleBackButton = () => {
    setIndex(index - 1);
  };

  const handleSubmitButton = async () => {
    setIsLoading(true);
    if (answersSelected.length < 12) {
      toast.error(
        "Ops, parece que você esqueceu de preencher algum campo, lembre-se de responder todas as perguntas."
      );
      return;
    }
    const { success, message } = await createReport(answersSelected);
    if (!success) {
      toast.error(message);
      return;
    }
    setIsLoading(false);
    redirect("/success");
  };

  const renderBackButton = () => {
    return <BackButton onClick={handleBackButton} />;
  };

  const renderNextButton = () => {
    return <NextButton onClick={handleNextClick} />;
  };

  const renderSubmitButton = () => {
    return <SubmitButton onClick={handleSubmitButton} isLoading={isLoading} />;
  };

  const renderQuestionsController = () => {
    if (index === 0) {
      return <div className="first-step">{renderNextButton()}</div>;
    }
    if (index === multipleChoiceQuestions.length - 1) {
      return (
        <div className="questionsControllers">
          {renderBackButton()}
          {renderSubmitButton()}
        </div>
      );
    }
    return (
      <div className="questionsControllers">
        {renderBackButton()}
        {renderNextButton()}
      </div>
    );
  };

  const renderContent = () => {
    if (questionsNotFound) {
      return (
        <p>
          Nenhuma pergunta foi encontrada, recarregue a página ou tente
          novamente mais tarde.
        </p>
      );
    }
    return renderQuestionByIndex(index);
  };

  return (
    <div className="container-content">
      <div className="container-form">
        {renderContent()}
        {renderQuestionsController()}
      </div>
      <Avatar />
    </div>
  );
}
