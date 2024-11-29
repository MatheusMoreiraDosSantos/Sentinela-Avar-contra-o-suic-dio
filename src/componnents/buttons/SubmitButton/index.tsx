import React from "react";
import "./styles.css";
import PulseLoader from "react-spinners/PulseLoader";
interface props {
  onClick: () => void;
  isLoading: boolean;
}

export default function SubmitButton({ onClick, isLoading }: props) {
  const renderContent = () => {
    if (isLoading) {
      return (
        <span>
          Enviando <PulseLoader color="#fff" size={5} />
        </span>
      );
    }
    return "Enviar";
  };

  return (
    <button className="SubmitButton" onClick={onClick}>
      {renderContent()}
    </button>
  );
}
