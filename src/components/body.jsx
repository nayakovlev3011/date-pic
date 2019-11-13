import React from "react";
import { Week } from "./week.jsx";
import { Day } from "./day.jsx";

export const Body = props => {
  let content = [];
  let { date } = props;
  let current = new Date();

  let countDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  let firstNumberDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  firstNumberDay = (firstNumberDay + 6) % 7;

  let countRows = Math.ceil((firstNumberDay + countDays) / 7);
  let day = 1;
  let index = 0;

  for (let i = 0; i < countRows; i++) {
    let dayList = [];

    for (let j = 0; j < 7; j++) {
      let d; //значение даты
      let curr = false; //отрисовываемая дата является текущей?
      let weekend = false; //день выходной?

      if (day <= countDays && index >= firstNumberDay) {
        d = day;
      } else if (index < firstNumberDay) {
        d = new Date(
          date.getFullYear(),
          date.getMonth(),
          (7 - firstNumberDay - index) * -1
        ).getDate();
      }
      if (day === countDays) {
        day = 0;
      }

      if (d === current.getDate()) {
        curr = true;
      }

      if ((j > 0 && j % 5 === 0) || (j > 0 && j % 6 === 0)) {
        weekend = true;
      }

      dayList.push(
        <Day id={i * j + j} current={curr} weekend={weekend}>
          {d}
        </Day>
      );

      if (index >= firstNumberDay) {
        day++;
      }

      index++;
    }

    content.push(<Week>{dayList}</Week>);
  }
  //console.log(firstNumberDay);
  return <div className="calendar-body">{content}</div>;
};
