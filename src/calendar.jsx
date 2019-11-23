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
      day: 0,
      month: 0,
      year: 2000,
      showArrow: true,
      yearsList: [
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023
      ]
    };
  }

  componentDidMount() {
    this.setState({
      day: this.state.date.getDate(),
      month: this.state.date.getMonth(),
      year: this.state.date.getFullYear()
    });
  }

  createDate = (year, month) => {
    let newDate = new Date(this.state.date.setFullYear(year));
    newDate.setMonth(month);

    return new Date(newDate);
  };

  handleClickArrow = e => {
    if (this.state.showArrow) {
      if (e.currentTarget.textContent === "<") {
        if (this.state.month - 1 > -1) {
          let m = this.state.month - 1;

          this.setState({
            month: m,
            date: this.createDate(this.state.year, m)
          });
        } else {
          let newFullYear = this.state.date.getFullYear() - 1;

          this.setState({
            month: 11,
            year: this.state.year - 1,
            date: this.createDate(newFullYear, 11)
          });
        }
      } else if (e.currentTarget.textContent === ">") {
        if (this.state.month + 1 < 12) {
          let m = this.state.month + 1;

          this.setState({
            month: m,
            date: this.createDate(this.state.year, m)
          });
        } else {
          let newFullYear = this.state.date.getFullYear() + 1;

          this.setState({
            month: 0,
            year: this.state.year + 1,
            date: this.createDate(newFullYear, 0)
          });
        }
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

  selectDay = e => {
    console.log(e.currentTarget.textContent);
    this.props.getDate(
      new Date(this.state.year, this.state.month, e.currentTarget.textContent)
    );

    this.setState({
      day: e.currentTarget.textContent,
      date: new Date(this.state.year, this.state.month, e.currentTarget.textContent)
    })
  };

  /* ОБРАБОТКА ВЫБОРА МЕСЯЦА В ДРОПДАУНЕ */
  selectMonth = e => {
    let month = nameMonthes.indexOf(e.currentTarget.textContent);

    this.setState({
      month: nameMonthes.indexOf(e.currentTarget.textContent),
      date: new Date(this.state.date.setMonth(month)),
      boxselect: 0
    });
  };

  selectYear = e => {
    let year = e.currentTarget.textContent;

    this.setState({
      year: year,
      date: this.createDate(year, this.state.month),
      showDropdownPanel: !this.state.showDropdownPanel,
      showArrow: !this.state.showArrow
    });
  };

  render() {
    console.log(this.state.date)
    return (
      <div className="calendar">
        <div
          className={
            this.state.showDropdownPanel
              ? "calendar-dropdown-panel"
              : "calendar-dropdown-panel calendar-hidden"
          }
        >
          {this.state.boxselect === 1 ? (
            <BoxSelect current={this.state.month} clickMonth={this.selectMonth}>
              {nameMonthes}
            </BoxSelect>
          ) : (
            <BoxSelect
              current={this.state.yearsList.indexOf(this.state.year)}
              clickMonth={this.selectYear}
            >
              {this.state.yearsList}
            </BoxSelect>
          )}
        </div>

        <Header
          handleClickMonth={this.clickHeaderMonth}
          handleClickYear={this.clickHeaderYear}
          nameMonth={nameMonthes[this.state.month]}
          year={this.state.year}
          showArrow={this.state.showArrow}
          left={this.handleClickArrow}
          right={this.handleClickArrow}
          arrowDown={this.handleMousDownArrow}
          arrowUp={this.handleMousUpArrow}
        />
        <NameDays shortNameDaysWeek={shortNameDaysWeek} />
        <Body
          selectDay={this.selectDay}
          slide={this.state.bodySlide}
          date={this.state.date}
        />
      </div>
    );
  }
}
