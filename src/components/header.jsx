import React from "react";

export const Header = props => {
  return (
    <div className="calendar-header">
      <div className="calendar-header__arrow calendar-header__arrow-left">
        &lt;
      </div>
      <div className="calendat-header__title">Ноябрь 2019</div>
      <div className="calendar-header__arrow calendar-header__arrow-right">
        &gt;
      </div>
    </div>
  );
};
