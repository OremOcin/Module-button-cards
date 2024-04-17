import React from "react";
import "../../css/buttonsStyle/buttonTwo.css";
import calculatrice from "../../assets/icons/calculatrice.png";
import logique from "../../assets/icons/logique.png";
import theorieensemble from "../../assets/icons/theorie-des-ensembles.png";

const ButtonTwo = () => {
  return (
    <div className="bTwoFlexContainer">
      <div className="bTwoSprite">
        <img
          className="icons"
          width="64"
          height="64"
          src={calculatrice}
          alt=""
        />
      </div>
      <div className="bTwoSprite2">
        <img className="icons" width="64" height="64" src={logique} alt="" />
      </div>
      <div className="bTwoSprite3">
        <img
          className="icons"
          width="64"
          height="64"
          src={theorieensemble}
          alt=""
        />
      </div>
    </div>
  );
};

export default ButtonTwo;
