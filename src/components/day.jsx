import React from "react";

export const Day = props => {
  let curr = props.current ? " calendar__day_current" : "";
  let weekend = props.weekend ? " calendar__day_weekend" : "";
  let dayCurrentMonth = !props.dayCurrentMonth
    ? " calendar__day_none-current-month"
    : "";
  let cls = props.cls !== undefined ? props.cls : "";

  return (
    <div
      key={props.id}
      className={
        "calendar__day" + dayCurrentMonth + (" " + cls + " ") + curr + weekend
      }
    >
      {props.children}
    </div>
  );
};
