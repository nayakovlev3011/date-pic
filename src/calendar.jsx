import React from "react";

import { BoxSelect } from "./components/boxselect.jsx";

import { Header } from "./components/header.jsx";
import { NameDays } from "./components/namedays.jsx";
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
      showDropdownPanel: false,
      date: props.date === undefined ? new Date() : props.date,
      month: 0,
      year: 2000,
      showArrow: true
    };

    this.clickHederMonth = this.clickHeaderMonth.bind(this);
    this.clickHeaderYear = this.clickHeaderYear.bind(this);
  }

  componentDidMount() {
    this.setState({
      month: this.state.date.getMonth(),
      year: this.state.date.getFullYear()
    });
  }

  handleClickArrowLeft = () => {
    if (this.state.showArrow) {
      if (this.state.month - 1 > -1) {
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
    }
  };

  handleClickArrowRight = () => {
    if (this.state.showArrow) {
      if (this.state.month + 1 < 12) {
        let m = this.state.month + 1;

        this.setState({
          month: m,
          date: new Date(this.state.date.setMonth(m))
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
    }
  };

  handleMousDownArrow = e => {
    if (this.state.showArrow) {
      this.setState({
        bodySlide: "animation-slide-" + e.target.getAttribute("data")
      });
    }
  };

  handleMousUpArrow = () => {
    setTimeout(
      function() {
        this.setState({ bodySlide: "" });
      }.bind(this),
      500
    );
  };

  clickHeaderMonth = () => {
    this.setState({
      showDropdownPanel: !this.state.showDropdownPanel,
      showArrow: !this.state.showArrow,
      boxselect: 1
    });
  };

  clickHeaderYear = () => {
    this.setState({
      showDropdownPanel: !this.state.showDropdownPanel,
      boxselect: 0
    });
  };

  render() {
    return (
      <div className="calendar">
        <div className={
            this.state.showDropdownPanel
              ? "calendar-dropdown-panel"
              : "calendar-dropdown-panel calendar-hidden"
          }
        >
          {this.state.boxselect === 1 ? (
            <BoxSelect current={this.state.month}>{nameMonthes}</BoxSelect>
          ) : (
            ""
          )}
        </div>

        <Header
          handleClickMonth={this.clickHeaderMonth}
          handleClickYear={this.clickHeaderYear}
          nameMonth={nameMonthes[this.state.month]}
          year={this.state.year}
          showArrow={this.state.showArrow}
          left={this.handleClickArrowLeft}
          right={this.handleClickArrowRight}
          arrowDown={this.handleMousDownArrow}
          arrowUp={this.handleMousUpArrow}
        />
        <NameDays shortNameDaysWeek={shortNameDaysWeek} />
        <Body slide={this.state.bodySlide} date={this.state.date} />
      </div>
    );
  }
}
