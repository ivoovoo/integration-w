import React from "react";
import List from "./List";
import Quality from "./Quality";

import "./Decoding.css";

const Decoding = () => {
  return (
    <section className="decoding">
      <div className="container decoding__inner">
        <div className="decoding__content">
          <h3 className="title decoding__title">
            Расшифровка значений <br /> <span> матрицы судьбы</span>
          </h3>
          <p className="decoding__text">
            Это энергии дня и месяца нашего рождения. Это наши личные качества.
            Они от рождения даются нам в плюсе - это связь с нашей душой. Это
            компас нашей души. Но взрослея, мы можем терять эту связь, компас
            ломается и вибрации этих энергий могут уходить в минус. Через
            визитную карточку мы взаимодействуем с миром: общаемся, работаем,
            реализуем свой потенциал, раскрываем свои таланты, отдыхаем,
            находимся в потоке и испытываем счастье и удовлетворение от жизни.
            Именно поэтому важно, стремиться к плюсу по этим энергиям.
          </p>
          <Quality />
        </div>
        <List />

      </div>
    </section>
  );
};

export default Decoding;
