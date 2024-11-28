import React from "react";
import "./styles.css";
interface props {
  onClick: () => void;
}

export default function NextButton({ onClick }: props) {
  return (
    <button className="NextButton" onClick={onClick}>
      Proximo
    </button>
  );
}
