import React from "react";
import { emojis } from "../config/emojis";


const RandomEmoji = () => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <>
      {randomEmoji}
    </>
  );
};

export default RandomEmoji;
