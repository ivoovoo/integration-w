import React, { useEffect, useState } from "react";
import { DateCalendar } from "../../../features/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../features/Users";

const Form = () => {

const active = useSelector((s) => s.users.active);
const initialDate = active?.date ? new Date(active.date) : new Date(2003, 1, 1);

  const dispatch = useDispatch();
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    if (active) setDate(new Date(active.date));
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ date: date.toDateString() }));
  };
  return (
    <form className="fate__form" onSubmit={handleSubmit}>
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
