import React, { useState } from "react";
import { DateCalendar } from "../../../features/DateCalendar";

const Form = () => {
  const [date, setDate] = useState(new Date(2003, 1, 1));

  return (
    <form className="fate__form">
      <input className="fate__form-name" placeholder="Имя" />
      <DateCalendar
        value={date}
        setValue={setDate}
        buttonClass={"fate__birthday"}
        wrapperClass={"fate__birthday-wrapper"}
      />
      <button className="fate__form-button">Рассчитать</button>
    </form>
  );
};

export default Form;
