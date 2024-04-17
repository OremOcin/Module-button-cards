import React from "react";
import "../../css/cardsStyle/cardOne.css";
import Img1 from "../../assets/imgPublic/personaOne.jpg";

const CardOne = () => {
  return (
    <div className="cardOneFlexContainer">
      <div className="cardOneSprite">
        <img className="cardOnePersonaImg" src={Img1} alt="" />
        <div className="infosCardContainer">
          <div className="textsInfosCardContainer">
            <h2 className="firstNameCard">Anissa</h2>
            <h3 className="jobTitleCard">Dev Front end</h3>
            <h3 className="jobTitleCard">HTML CSS JS</h3>
          </div>
        </div>
      </div>
      <div className="cardOneSprite">
        <img className="cardOnePersonaImg" src={Img1} alt="" />
        <div className="infosCardContainer">
          <div className="textsInfosCardContainer">
            <h2 className="firstNameCard">Anissa</h2>
            <h3 className="jobTitleCard">Dev Front end</h3>
            <h3 className="jobTitleCard">HTML CSS JS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
