import React from "react";

import { Week } from "./week.jsx";
import { Day } from "./day.jsx";

export const NameDays = props => {
  let weekend;
  //let {shortNameDaysWeek} = props;
  let content = [];

  for (let i = 0; i < 7; i++) {
    if ((i > 0 && i % 5 === 0) || (i > 0 && i % 6 === 0)) {
      weekend = true;
    }

    content.push(
      <Day cls="calendar__title" dayCurrentMonth={true} weekend={weekend}>
        {props.shortNameDaysWeek[i]}
      </Day>
    );
  }
  return <Week>{content}</Week>;
};
