import React from "react";
import "./styles.css";
interface props {
  onClick: () => void;
}

export default function SubmitButton({ onClick }: props) {
  return (
    <button className="SubmitButton" onClick={onClick}>
      Enviar
    </button>
  );
}
