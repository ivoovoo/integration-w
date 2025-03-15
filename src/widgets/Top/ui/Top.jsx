import React, { useState } from "react";
import Button from "../../../shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { DateCalendar } from "../../../features/DateCalendar";

import "./Top.css";
import { addItem } from "../../../features/Users";
import { useDispatch } from "react-redux";

const Top = () => {
  const [value, setValue] = useState(new Date(2003, 1, 1));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addItem({ date: value.toDateString() }));
    navigate("matrix-of-fate");
  };
  return (
    <section className="top">
      <div className="container top__inner">
        <div className="top__content">
          <h1 className="top__title">
            раскрой свой <span>лабиринты души</span>{" "}
          </h1>
          <p className="top__text">
            Отправьтесь в увлекательное путешествие самопознания: погружение в
            глубины человеческой психики через уникальные исследования и мудрое
            руководство по раскрытию своего потенциала
          </p>
          <div className="top__wrapper">
            <DateCalendar
              value={value}
              setValue={setValue}
              wrapperClass={"top__date"}
              buttonClass={"top__date-button"}
            />
            <div className="top__button-wrapper">
              <Button className={"top__button"} onClick={handleClick}>
                Разгадать судьбу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
