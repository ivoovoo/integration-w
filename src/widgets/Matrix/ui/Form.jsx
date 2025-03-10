import React, { useState } from "react";
import Calendar from "react-calendar";
import { getDateString } from "../../../shared/lib/getDate/getDate";

const Form = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date("06.19.2000"));
  return (
    <form className="matrix__form">
      <input className="matrix__form-name" placeholder="Имя" />
      <div className="matrix__birthday-wrapper">
        <button className="matrix__birthday" onClick={() => setShow(b => !b)} type="button">
          Рождение: <span>{getDateString(date)}</span>
        </button>
        {show && (
          <Calendar className={"calendar"} value={date} onChange={setDate} />
        )}
      </div>
      <button className="matrix__form-button">Рассчитать</button>
    </form>
  );
};

export default Form;
