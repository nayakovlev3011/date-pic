import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/header.jsx";
import { Body } from "./components/body.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body date={new Date()} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
