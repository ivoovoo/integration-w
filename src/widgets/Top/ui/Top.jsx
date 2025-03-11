import React, { useState } from "react";
import Button from "../../../shared/ui/Button/Button";
import DateC from "./Date";
import {  useNavigate } from "react-router-dom";

import "./Top.css";

const Top = () => {
  const [value, setValue] = useState(new Date(2003, 1, 1));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('matrix-of-fate?_date=' + value.toDateString());
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
            <DateC value={value} setValue={setValue} />
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
