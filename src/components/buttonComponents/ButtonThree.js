import React from "react";
import "../../css/buttonsStyle/buttonThree.css";
import { useState } from "react";

const ButtonThree = () => {
  const [classeDivOne, setClasseDivOne] = useState("bThreeSprite1");
  const [classeDivTwo, setClasseDivTwo] = useState("bThreeSprite2");
  const [classeDivThree, setClasseDivThree] = useState("bThreeSprite3");
  const [classeDivFour, setClasseDivFour] = useState("bThreeSprite4");

  const handleClickDiv = () => {
    setClasseDivOne(
      classeDivOne === "bThreeSprite1" ? "bThreeSprite1-after" : "bThreeSprite1"
    );
    setClasseDivTwo(
      classeDivTwo === "bThreeSprite2" ? "bThreeSprite2-after" : "bThreeSprite2"
    );
  };

  const handleClickDivTwo = () => {
    setClasseDivThree(
      classeDivThree === "bThreeSprite3"
        ? "bThreeSprite3-after"
        : "bThreeSprite3"
    );
    setClasseDivFour(
      classeDivFour === "bThreeSprite4"
        ? "bThreeSprite4-after"
        : "bThreeSprite4"
    );
  };

  return (
    <div className="btnThreeFlexContainer">
      <div className="btnOneContainer">
        <div className={classeDivOne} onClick={handleClickDiv}>
          Speed
        </div>
        <div className={classeDivTwo} onClick={handleClickDiv}>
          Quality
        </div>
      </div>
      <div className="btnTwoContainer">
        <div className={classeDivThree} onClick={handleClickDivTwo}>
          HTML
        </div>
        <div className={classeDivFour} onClick={handleClickDivTwo}>
          CSS
        </div>
      </div>
    </div>
  );
};

export default ButtonThree;
