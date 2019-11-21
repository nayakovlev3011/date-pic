import React from 'react';

export const SlideSelect = props => {
  return(
    <div className="slide-select">
      <div
        className="calendar__arrow calendar__arrow-left"
        data="left"
        onClick={props.left}
        onMouseDown={props.arrowDown}
        onMouseUp={props.arrowUp}
      >
        &lt;
      </div>
      {
        props.children.map( function( item, idx ){
          return(
            <div key={idx} className={
              props.current === item 
                  ? "slide-select__item slide-select__item_current"
                  : "slide-select__item"
                }
            >
              {item}
            </div>
          )
        })
      }
      <div
        className="calendar__arrow calendar__arrow-right"
        data="right"
        onClick={props.right}
        onMouseDown={props.arrowDown}
        onMouseUp={props.arrowUp}
        >
        &gt;
      </div>
    </div>
  )
}