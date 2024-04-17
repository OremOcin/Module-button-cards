import React from "react";
import "../css/buttonPage.css";
import ButtonOne from "./buttonComponents/ButtonOne";
import ButtonTwo from "./buttonComponents/ButtonTwo";
import ButtonThree from "./buttonComponents/ButtonThree";
import ButtonFour from "./buttonComponents/ButtonFour";

const ButtonPage = () => {
  return (
    <div className="gestionaryButtonsFlexContainer">
      <ButtonOne />
      <ButtonTwo />
      <ButtonThree />
      <ButtonFour />
    </div>
  );
};

export default ButtonPage;
