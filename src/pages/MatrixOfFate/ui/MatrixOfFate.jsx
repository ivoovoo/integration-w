import React, {  useState } from "react";
import Form from "./Form";
import { SchemeMatrix } from "../../../features/SchemeMatrix";
import { Buttons } from "../../../features/Buttons";
import { buttonsConfig } from "../config/buttons";

import "./MatrixOfFate.css";

const MatrixOfFate = () => {
  const [buttons, setButtons] = useState(buttonsConfig)
  const active = buttons.find(item => item.active)
  
  return (
    <section className="fate">
      <Form />
      <Buttons  buttons={buttons} setButtons={setButtons}/>
      <div className="fate__content">
        <div className="fate__wrapper">
          <h3 className="title fate__title">
            {active.title}
          </h3>
          <p className="fate__text">
            {active.text}
          </p>
        </div>
        <div className="fate__scheme">
          <SchemeMatrix />
        </div>
      </div>
    </section>
  );
};

export default MatrixOfFate;
