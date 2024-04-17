import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonPage from "./components/ButtonPage";
import CardsPage from "./components/CardsPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ButtonPage" element={<ButtonPage />} />
          <Route path="/CardsPage" element={<CardsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
