import React from "react";
import "../../css/buttonsStyle/buttonFour.css";
import { useState } from "react";

const ButtonFour = () => {
  const [divSun, setClasDivSun] = useState("bFourSprite-sun");
  const [divSunAfter, setClassDivSunAfter] = useState("bFourSprite-sun-after");
  const [divInSun, setClassDivInSun] = useState("iconMiddleCircle-sun");
  const [divInSunAfter, setClassDivInSunAfter] = useState(
    "iconMiddleCircle-sun-after"
  );
  const [divMoon, setClassDivMoon] = useState("bFourSprite-moon");
  const [divMoonAfter, setClassDivMoonAfter] = useState(
    "bFourSprite-moon-after"
  );
  const [divInMoon, setClassDivInMoon] = useState("iconMiddleCircle-moon");
  const [divInMoonAfter, setClassDivInMoonAfter] = useState(
    "iconMiddleCircle-moon-after"
  );

  const handleClickDiv = () => {
    setClasDivSun(
      divSun === "bFourSprite-sun" ? "bFourSprite-sun-after" : "bFourSprite-sun"
    );
    setClassDivInSun(
      divInSun === "iconMiddleCircle-sun"
        ? "iconMiddleCircle-sun-after"
        : "iconMiddleCircle-sun"
    );

    setClassDivMoon(
      divMoon === "bFourSprite-moon"
        ? "bFourSprite-moon-after"
        : "bFourSprite-moon"
    );
    setClassDivInMoon(
      divInMoon === "iconMiddleCircle-moon"
        ? "iconMiddleCircle-moon-after"
        : "iconMiddleCircle-moon"
    );
  };

  return (
    <div className="bFourFlexContainer">
      <div className={divSun} onClick={handleClickDiv}>
        <div className={divInSun}></div>
      </div>
      <div className={divMoon} onClick={handleClickDiv}>
        <div className={divInMoon}></div>
      </div>
    </div>
  );
};

export default ButtonFour;
