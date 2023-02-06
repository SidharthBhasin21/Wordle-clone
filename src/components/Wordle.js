import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, usedKeys, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      console.log("You Win");
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect]);

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect);
  // }, [guesses, isCorrect, turn]);
  return (
    <div>
      <div>{solution}</div>
      <div>Current Guess: {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}
