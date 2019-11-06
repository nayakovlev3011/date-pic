import React from "react";
import Day from "./day.jsx";

export const Body = props => {
  let content = [];
  // console.log(props);
  let { date } = props;
  console.log(date);
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
  console.log(firstNumberDay);
  return <p>{countRows}</p>;
};
