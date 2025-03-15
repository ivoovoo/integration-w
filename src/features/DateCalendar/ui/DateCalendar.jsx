import React, { useRef, useState } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { getDateString } from "../../../shared/lib/getDate/getDate";
import CalendarMain from "./CalendarMain";

import "react-calendar/dist/Calendar.css";
import "./DateCalendar.css";


const DateCalendar = ({
  wrapperClass = "",
  buttonClass = "",
  value,
  setValue,
  children,
}) => {
  const dateRef = useRef();
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={classNames("date", [wrapperClass])} ref={dateRef}>
      <button
        className={classNames("date__button", [buttonClass])}
        onClick={toggleShow}
        type="button"
      
      >
        {value ? getDateString(value) : children}
      </button>
      {show && (
        <CalendarMain
          setShow={setShow}
          setValue={setValue}
          value={value}
          dateRef={dateRef}
        />
      )}
    </div>
  );
};

export default DateCalendar;
