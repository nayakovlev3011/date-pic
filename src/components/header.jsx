import React from "react";

export const Header = props => {
  let arrowHidden;

  if (props.showArrow || props.showArrow === undefined) {
    arrowHidden = "";
  } else {
    arrowHidden = "calendar-hidden";
  }

  return (
    <div className="calendar-header">
      <div
        className={
          "calendar__arrow calendar-header__arrow-left " + arrowHidden
        }
        data="left"
        onClick={props.left}
        onMouseDown={props.arrowDown}
        onMouseUp={props.arrowUp}
      >
        &lt;
      </div>
      <div className="calendar-header__title">
        <p className="calendar-header__month" onClick={props.handleClickMonth}>
          {props.nameMonth}
        </p>
        <p className="calendar-header__year" onClick={props.handleClickYear}>
          {props.year}
        </p>
      </div>
      <div
        className={
          "calendar__arrow calendar-header__arrow-right " + arrowHidden
        }
        data="right"
        onClick={props.right}
        onMouseDown={props.arrowDown}
        onMouseUp={props.arrowUp}
      >
        &gt;
      </div>
    </div>
  );
};
