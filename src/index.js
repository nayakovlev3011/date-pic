import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header.jsx";
import { Body } from "./components/body.jsx";

import "./styles.css";

function Calendar() {
  return (
    <div className="calendar">
      <Header />
      <Body date={new Date()} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calendar />, rootElement);
