import React, { useState } from "react";
import Header from "./Header";
const purple = "#0CF576";

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);

  return `#${randColor.toUpperCase()}`;
}
const App = () => {
  const [number, setNumber] = useState(0);
  const [cr, setcr] = useState(purple);
  const chg = () => {
    setcr(generateRandomColor());
    console.log("hi");
    setNumber(number + 1);
  };

  document.body.style.backgroundColor = cr;
  return (
    <>
      <Header />
      <div className="center">
        <h2>Generate Random Color</h2>
        <h1>{cr}</h1>
        <div className="container">
          <button onClick={chg}>Click Here !</button>
        </div>
      </div>
    </>
  );
};
export default App;
