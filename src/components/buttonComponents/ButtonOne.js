import React from "react";
import "../../css/buttonsStyle/buttonOne.css";
import partagerIcon from "../../assets/icons/reddit.png";

const ButtonOne = () => {
  return (
    <div className="bOneFlexContainer">
      <div className="bOneSprite">
        <img width="130" height="130" src={partagerIcon} alt="" />
      </div>
    </div>
  );
};

export default ButtonOne;
