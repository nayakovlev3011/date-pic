import React from "react";

export const Header = props => {
  return (
    <div className="calendar-header">
      <div
        className="calendar-header__arrow calendar-header__arrow-left"
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
        className="calendar-header__arrow calendar-header__arrow-right"
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
