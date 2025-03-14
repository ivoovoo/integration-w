import React, { useState } from "react";
import Sprite from "../../../shared/ui/Sprite/Sprite";

const ThemeSwitcher = () => {
  const [lightActive, setLightActive] = useState(false);
  return (
    <div className="header__theme">
      <button className="header__theme-button" onClick={() => setLightActive(true)}>
        {lightActive ? (
          <Sprite width={43} height={43} icon={"sun-active"} />
        ) : (
          <Sprite width={43} height={43} icon={"sun"} />
        )}
      </button>
      <button className="header__theme-button" onClick={() => setLightActive(false)}>
        {!lightActive ? (
          <Sprite width={43} height={43} icon={"moon-active"} />
        ) : (
          <Sprite width={43} height={43} icon={"moon"} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
