import React, { useState } from "react";
import Calendar from "react-calendar";
import { getDateString } from "../../../shared/lib/getDate/getDate";

const Form = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date("06.19.2000"));
  
  return (
    <form className="fate__form">
      <input className="fate__form-name" placeholder="Имя" />
      <div className="fate__birthday-wrapper">
        <button
          className="fate__birthday"
          type="button"
          onClick={() => setShow((b) => !b)}
        >
          {getDateString(date)}
        </button>
        {show && (
          <Calendar className={"calendar"} value={date} onChange={setDate} />
        )}
      </div>
      <button className="fate__form-button">Рассчитать</button>
    </form>
  );
};

export default Form;
