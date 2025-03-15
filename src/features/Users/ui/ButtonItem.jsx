import React from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { useDispatch } from "react-redux";
import { changeActive } from "../model/usersSlice";

const ButtonItem = ({ active, children, index }) => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(changeActive(index));
  };

  return (
    <button className={classNames("users__button", [], { active })} onClick={() => handleClick(index)}>
      {children}
    </button>
  );
};

export default ButtonItem;
