import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./calendar.jsx";
const getDate = date => {
  console.log(date)
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Calendar getDate={getDate}/>, rootElement);
