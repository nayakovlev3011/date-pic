import React from "react";

export const Day = props => {
  let curr = props.current ? "calendar__day_current" : "";
  let weekend = props.weekend ? "calendar__day_weekend" : "";

  return (
    <div key={props.id} className={"calendar__day " + curr + " " + weekend}>
      {props.children}
    </div>
  );
};
