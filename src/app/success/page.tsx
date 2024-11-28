"use client";
import React from "react";
import AvatarSuccess from "./avatarSuccess";
import "./styles.css";
import { redirect } from "next/navigation";

export default function Success() {
  return (
    <div className="content-success">
      <div className="content-message">
        <h2>Parabéns, você esta salvando vidas!</h2>
        <p>
          Obrigado pelas informações! Elas são muito importantes para nós. Se
          você perceber algo errado, fale. A vida das pessoas perto de você
          também é sua responsabilidade. Juntos, podemos ajudar!
        </p>
        <button
          className="button-goback"
          onClick={() => {
            redirect("/");
          }}
        >
          Relatar mais alguém
        </button>
      </div>
      <AvatarSuccess />
    </div>
  );
}
