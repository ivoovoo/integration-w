import React, { useState } from "react";
import { DateCalendar } from "../../../features/DateCalendar";
import { getDateString } from "../../../shared/lib/getDate/getDate";

const Form = () => {
  const [date, setDate] = useState(new Date(2003, 1, 1));
  return (
    <form className="matrix__form">
      <input className="matrix__form-name" placeholder="Имя" />
      <DateCalendar
        setValue={setDate}
        wrapperClass={"matrix__birthday-wrapper"}
        buttonClass={"matrix__birthday"}
      ><>Рождение: <span>{getDateString(date)}</span></></DateCalendar>
      <button className="matrix__form-button">Рассчитать</button>
    </form>
  );
};

export default Form;
