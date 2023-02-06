import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect ? (
        <div>
          <h1>You Win</h1>
          <p className="solution"> The solution was: {solution}</p>
          <p> You Guessed it in {turn} gusses 👻</p>
        </div>
      ) : (
        <div>
          <h1>Nevermind! </h1>
          <p className="solution"> The solution was: {solution}</p>
          <p> Better luck next time 👍🏻</p>
        </div>
      )}
    </div>
  );
}
