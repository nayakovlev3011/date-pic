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
    this.state = {
      date: props.date === undefined ? new Date() : props.date,
      month: 0,
      year: 2000
    };
  }

  componentDidMount() {
    this.setState({
      month: this.state.date.getMonth(),
      year: this.state.date.getFullYear()
    });
  }

  handleClickArrowLeft = () => {
    if (this.state.date - 1 > -1) {
      let m = this.state.month - 1;

      this.setState({
        month: m,
        date: new Date(this.state.date.setMonth(m))
      });
    } else {
      let newFullYear = this.state.date.getFullYear() - 1;
      let newDate = new Date(this.state.date.setFullYear(newFullYear));
      newDate.setMonth(11);

      this.setState({
        month: 11,
        year: this.state.year - 1,
        date: new Date(newDate)
      });
    }
  };

  handleClickArrowRight = () => {
    if (this.state.month + 1 < 12) {
      let m = this.state.month + 1;

      this.setState({
        month: m,
        date: new Date(this.state.date.setMonth(m)),
        bodySlide: "animation-slide-right"
      });
    } else {
      let newFullYear = this.state.date.getFullYear() + 1;
      let newDate = new Date(this.state.date.setFullYear(newFullYear));
      newDate.setMonth(0);
      //console.log(newDate);
      this.setState({
        month: 0,
        year: this.state.year + 1,
        date: new Date(newDate)
      });
    }
  };

  render() {
    //console.log(this.state.date);
    return (
      <div className="calendar">
        <div className="dropdown-panel">
          <BoxSelect>{nameMonthes}</BoxSelect>
        </div>
        <Header
          nameMonth={nameMonthes[this.state.month]}
          year={this.state.year}
          left={this.handleClickArrowLeft}
          right={this.handleClickArrowRight}
        />
        <Body
          slide={this.state.bodySlide}
          shortNameDaysWeek={shortNameDaysWeek}
          date={this.state.date}
        />
      </div>
    );
  }
}
