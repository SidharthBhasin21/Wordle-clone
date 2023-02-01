import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    console.log("he;;o");
    fetch("https://my-json-server.typicode.com/sidharthbhasin21/json-server/db")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.solutions);
        const randomSolution =
          json.solutions[Math.floor(Math.random() * json.solutions.length)];
        // console.log(randomSolution);
        // console.log(randomSolution);
        setSolution(randomSolution.word);
      });

    // getSolution();
  }, []);

  // async function getSolution() {
  //   const data = await fetch(
  //     "https://my-json-server.typicode.com/sidharthbhasin21/json-server/db"
  //   );
  //   const json = await data.json();
  //   // console.log(json);
  //   const randomSolution = json[Math.floor(Math.random() * json.length)];
  //   setSolution(randomSolution.word);
  //   console.log(solution);
  // }
  return (
    <div className="App">
      <h1>Guess the word</h1>
      <div> Solution is : {solution}</div>
    </div>
  );
}

export default App;
