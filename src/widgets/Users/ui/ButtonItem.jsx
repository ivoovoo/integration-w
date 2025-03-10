import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const ButtonItem = ({ active, children }) => {
  return (
      <button className={classNames("users__button", [], active)}>
       {children}
      </button>
  );
};

export default ButtonItem;
