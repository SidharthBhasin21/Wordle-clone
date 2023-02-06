import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((item, i) => {
          // console.log(item);
          return (
            <div key={i} className={item.color}>
              {item.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((l, i) => {
          return (
            <div key={i} className="filled">
              {l}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((l, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div>{guess}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
