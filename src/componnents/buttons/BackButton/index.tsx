import React from "react";
import "./styles.css";
interface props {
  onClick: () => void;
}

export default function BackButton({ onClick }: props) {
  return (
    <button className="BackButton" onClick={onClick}>
      Voltar
    </button>
  );
}
