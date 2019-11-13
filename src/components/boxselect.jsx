import React from "react";

export const BoxSelect = props => {
  return (
    <div className="box-select">
      {props.children.map(function(item, idx) {
        return (
          <div key={idx} className="box-select__item">
            {item}
          </div>
        );
      })}
    </div>
  );
};
