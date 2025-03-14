import React from "react";
import Button from "../../../shared/ui/Button/Button";
import InactiveButton from "../../../shared/ui/InactiveButton/InactiveButton";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const ListButton = ({ children, active, block, handleClick }) => {
  const content = (
    <>
      {children}
      {block && <Sprite icon="block-icon" width={25} height={24} />}
    </>
  );
  return (
    <>
      {active ? (
        <Button onClick={handleClick} className={"decoding__button decoding__button--active"}>{content}</Button>
      ) : (
        <InactiveButton onClick={handleClick} className={"decoding__button"}>
          {content}
        </InactiveButton>
      )}
    </>
  );
};

export default ListButton;
