import React, { useState } from "react";
import ListButton from "./ListButton";
import { buttons } from "../config/buttons";

const List = () => {
  const [listButtons, setListButtons] = useState(buttons);

  const handleClick = (i) => {
    const newListButtons = listButtons.map((item, index) => {
      if (i == index) {
        item.active = true;
      } else {
        item.active = false;
      }

      return item;
    });

    console.log('ssads')
    setListButtons(newListButtons);
  };
  return (
    <div className="decoding__list">
      {listButtons.map((item, index) => (
        <ListButton
          key={item.value}
          active={item.active}
          block={item.block}
          handleClick={() => handleClick(index)}
        >
          {item.value}
        </ListButton>
      ))}
    </div>
  );
};

export default List;
