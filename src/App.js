import { useState } from "react";
import "./styles.css";

let fruitDictionary = {
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍒": "Cherries"
};

export default function App() {
  let [userInput, setUserInput] = useState("");
  let [meaning, setMeaning] = useState("meaning will be displayed here");

  let fruitsWeKnow = Object.keys(fruitDictionary);

  function fruitClickHandler(item) {
    let meaning = fruitDictionary[item];
    setMeaning(meaning);
  }

  function inputChangeHandler(event) {
    let input = event.target.value;
    setUserInput(input);

    if (input in fruitDictionary) {
      meaning = fruitDictionary[input];
    } else {
      meaning = "We do not have this in our db";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Fruit Emoji Interpreter</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter the Fruit Emoji here"
      ></input>
      <div>{userInput}</div>
      <div className="meaning">{meaning}</div>

      {fruitsWeKnow.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => fruitClickHandler(item)}
            style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
