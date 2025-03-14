import React, { useEffect } from "react";
import Calendar from "react-calendar";

const CalendarMain = ({ setShow, setValue, value, dateRef }) => {

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateRef.current && !dateRef.current.contains(e.target)) {
        setShow(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShow]);

  return (
      <Calendar className={'date__calendar'} onChange={setValue} value={value} />
  );
};

export default CalendarMain;
