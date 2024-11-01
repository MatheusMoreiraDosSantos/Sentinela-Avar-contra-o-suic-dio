"use client";
import React from "react";
import { multipleChoiceQuestions } from "../constants/questions";

const questionsNotFound = !multipleChoiceQuestions.length;

export default function Home() {
  const [index, setIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );

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
            onChange={() => setSelectedOption(option)}
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

  const renderBackButton = () => {
    return <button onClick={() => setIndex(index - 1)}>Voltar</button>;
  };

  const renderNextButton = () => {
    return <button onClick={() => setIndex(index + 1)}>Próximo</button>;
  };

  const renderSubmitButton = () => {
    return <button onClick={() => {}}>Enviar</button>;
  };

  const renderQuestionsController = () => {
    if (index == 0) return renderNextButton();
    if (index == multipleChoiceQuestions.length - 1) {
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
          Nenhuma pergunta foi encontrada, recarregue a página ou tente
          novamente mais tarde.
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
