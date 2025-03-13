import React, { useEffect, useRef, useState } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { getDateString } from "../../../shared/lib/getDate/getDate";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';
import './DateCalendar.css'


const DateCalendar = ({ wrapperClass, buttonClass, value, setValue, children }) => {
  const [show, setShow] = useState(false);
  const dateRef = useRef();

  const handleClickOutside = (e) => {
    if (dateRef.current  && !dateRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className={classNames("date", [wrapperClass])} ref={dateRef}>
      <button
        className={classNames("date__button", [buttonClass])}
        onClick={() => setShow((s) => !s)}
      >
       { value ? getDateString(value) : children}
      </button>
      {show && (
        <Calendar className={"date__calendar"} onChange={setValue} value={value} />
      )}
    </div>
  );
};

export default DateCalendar;
