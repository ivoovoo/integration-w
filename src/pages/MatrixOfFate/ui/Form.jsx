import React, { useEffect, useState } from "react";
import { DateCalendar } from "../../../features/DateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../features/Users";

const Form = () => {
  const active = useSelector((s) => s.users.active);
  const initialDate = active?.date
    ? new Date(active.date)
    : new Date(2003, 1, 1);

  const dispatch = useDispatch();
  const [name, setName] = useState(active.name);
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    if (active) {
      setName(active.name)
      setDate(new Date(active.date));}
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ date: date.toDateString(), name }));
  };
  return (
    <form className="fate__form" onSubmit={handleSubmit}>
      <input
        className="fate__form-name"
        placeholder="Имя"
        name="names"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
