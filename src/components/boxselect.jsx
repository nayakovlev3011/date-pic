import React from "react";

export const BoxSelect = props => {
  return (
    <div className="box-select">
      {props.children.map(function(item, idx) {
        return (
          <div
            key={idx}
            className={
              idx === props.current
                ? "box-select__item box-select__item_current"
                : "box-select__item"
              }
              onClick={props.clickMonth}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
