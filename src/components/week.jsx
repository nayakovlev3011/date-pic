import React from "react";

export const Week = props => {
  return (
    <div key={props.id} className="calendar__week">
      {props.children}
    </div>
  );
};
