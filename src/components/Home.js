import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="homeFlexContainer">
      <nav className="homeNavContainer">
        <a className="homeLinkNav" href="./ButtonPage">
          Boutons
        </a>
        <a className="homeLinkNav" href="./CardsPage">
          Cards
        </a>
      </nav>
    </div>
  );
};

export default Home;
