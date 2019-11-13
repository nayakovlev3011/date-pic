import React from "react";
import { Week } from "./week.jsx";
import { Day } from "./day.jsx";

export const Body = props => {
  let content = [];
  let { date, shortNameDaysWeek } = props;
  let current = new Date().setHours(0, 0, 0, 0);

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
  let dayCurrentMonth; //день не текущего месяца
  let endCurrentMonth = false;

  for (let i = 0; i <= countRows; i++) {
    let dayList = [];

    for (let j = 0; j < 7; j++) {
      let d; //значение даты
      let curr = false; //отрисовываемая дата является текущей?
      let weekend = false; //день выходной?
      let cls = "";

      if (i > 0) {
        if (endCurrentMonth) {
          dayCurrentMonth = false;
        } else {
          dayCurrentMonth = true;
        }

        cls = "";

        if (day <= countDays && index >= firstNumberDay) {
          d = day;
        } else if (index < firstNumberDay) {
          d = new Date(
            date.getFullYear(),
            date.getMonth(),
            (7 - firstNumberDay - index) * -1
          ).getDate();

          dayCurrentMonth = false;
        }

        if (day % countDays === 0) {
          day = 0;
          endCurrentMonth = true;
        }

        if (
          new Date(date.getFullYear(), date.getMonth(), d).getTime() === current
        ) {
          curr = true;
        }

        if (index >= firstNumberDay) {
          day++;
        }

        index++;
      } else {
        cls = "calendar__title";
        d = shortNameDaysWeek[j];
        dayCurrentMonth = true;
      }

      if ((j > 0 && j % 5 === 0) || (j > 0 && j % 6 === 0)) {
        weekend = true;
      }

      dayList.push(
        <Day
          id={i * j + j}
          cls={cls}
          current={curr}
          weekend={weekend}
          dayCurrentMonth={dayCurrentMonth}
        >
          {d}
        </Day>
      );
    }

    content.push(<Week id={i}>{dayList}</Week>);
  }

  return <div className="calendar-body">{content}</div>;
};
