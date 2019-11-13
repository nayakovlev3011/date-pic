import React from "react";

import { BoxSelect } from "./components/boxselect.jsx";

import { Header } from "./components/header.jsx";
import { Body } from "./components/body.jsx";

import "./styles.css";

const shortNameDaysWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const nameMonthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="calendar">
        <div className="dropdown-panel">
          <BoxSelect>{nameMonthes}</BoxSelect>
        </div>
        <Header />
        <Body shortNameDaysWeek={shortNameDaysWeek} date={new Date()} />
      </div>
    );
  }
}
