"use client";

import { useState } from "react";

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Home() {
  const [dice, setDice] = useState([1, 1]);
  const [message, setMessage] = useState("Clique em rolar para jogar.");

  const handleRoll = () => {
    const first = rollDie();
    const second = rollDie();
    setDice([first, second]);
    if (first === second) {
      setMessage("Empate! Lançe novamente.");
    } else if (first > second) {
      setMessage("Jogador 1 venceu!");
    } else {
      setMessage("Jogador 2 venceu!");
    }
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Jogo de Dados</h1>
        <p className="subtitle">Dois dados. Um vencedor. Boa sorte!</p>

        <div className="dice-grid">
          <div className="dice-box">
            <span className="dice-face">{faces[dice[0] - 1]}</span>
            <p>Jogador 1: {dice[0]}</p>
          </div>
          <div className="dice-box">
            <span className="dice-face">{faces[dice[1] - 1]}</span>
            <p>Jogador 2: {dice[1]}</p>
          </div>
        </div>

        <p className="message">{message}</p>
        <button className="roll-button" onClick={handleRoll}>
          Rolar Dados
        </button>
      </section>
    </main>
  );
}
