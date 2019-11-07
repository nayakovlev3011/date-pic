import React from "react";
import { Week } from "./week.jsx";
import { Day } from "./day.jsx";

export const Body = props => {
  let content = [];
  let { date } = props;
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

  let countRows = Math.ceil((firstNumberDay + countDays) / 7);

  for (let i = 0; i < countRows; i++) {
    let dayList = [];

    for (let j = 1; j <= 7; j++) {
      if (j < firstNumberDay) {
        let day = new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          7 - (7 - firstNumberDay)
        );
      }

      dayList.push(<Day>{j < firstNumberDay ? 0 : i}</Day>);
    }

    content.push(<Week>{dayList}</Week>);
  }
  console.log(firstNumberDay);
  return (
    <div className="calendar-body">
      <p>{countRows}</p>
      {content}
      <Week />
    </div>
  );
};
