"use client";
import React from "react";
import { multipleChoiceQuestions } from "../constants/questions";
import NextButton from "@/componnents/buttons/NextButton";
import BackButton from "@/componnents/buttons/BackButton";
import SubmitButton from "@/componnents/buttons/SubmitButton";

const questionsNotFound = !multipleChoiceQuestions.length;

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [answersSelected, setAnswersSelected] = React.useState<{ question: string; answer: string }[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setAnswersSelected((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = { question: multipleChoiceQuestions[index].question, answer: option };
      return updatedAnswers;
    });
  };

  const renderQuestionByIndex = (index: number) => {
    const { question, options } = multipleChoiceQuestions[index];

    const renderOptions = () => {
      return options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <input
            type="radio"
            id={`option-${index}-${optionIndex}`}
            name={`question-${index}`}
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
          />
          <label htmlFor={`option-${index}-${optionIndex}`}>{option}</label>
        </div>
      ));
    };

    return (
      <fieldset>
        <p>{question}</p>
        {renderOptions()}
      </fieldset>
    );
  };

  const handleNextClick = () => setIndex(index + 1);
  const handleBackButton = () => setIndex(index - 1);
  const handleSubmitButton = () => ()=> console.log(answersSelected);
  
  
  const renderBackButton = () => {
    return <BackButton onClick={handleBackButton}/>;
};

  const renderNextButton = () => {
    return <NextButton onClick={handleNextClick}/>;
  };

  const renderSubmitButton = () => {
    return <SubmitButton onClick={handleSubmitButton}/>}

  const renderQuestionsController = () => {
    if (index === 0) return renderNextButton();
    if (index === multipleChoiceQuestions.length - 1) {
      return (
        <div>
          {renderBackButton()}
          {renderSubmitButton()}
        </div>
      );
    }
    return (
      <div>
        {renderBackButton()}
        {renderNextButton()}
      </div>
    );
  };

  const renderContent = () => {
    if (questionsNotFound) {
      return (
        <p>
          Nenhuma pergunta foi encontrada, recarregue a página ou tente novamente mais tarde.
        </p>
      );
    }
    return renderQuestionByIndex(index);
  };

  return (
    <div>
      {renderContent()}
      {renderQuestionsController()}
    </div>
  );
}
