import React from "react";

export const Header = props => {
  return (
    <div className="calendar-header">
      <div
        className="calendar-header__arrow calendar-header__arrow-left"
        onClick={props.left}
      >
        &lt;
      </div>
      <div className="calendat-header__title">
        {props.nameMonth + props.year}
      </div>
      <div
        className="calendar-header__arrow calendar-header__arrow-right"
        onClick={props.right}
      >
        &gt;
      </div>
    </div>
  );
};
