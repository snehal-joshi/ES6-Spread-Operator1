import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// 1. Suppose you have 2 arrays like below
// if you want to merge citrus array with fruits,
// with adding at the end of fruits

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007"
};

console.log(user);
