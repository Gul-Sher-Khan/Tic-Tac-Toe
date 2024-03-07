import React, { useContext } from "react";
import { AppContext } from "./App";

const GameOver = () => {
  const { win } = useContext(AppContext);
  return (
    <div className="gameover">
      <h1>Game Over</h1>

      <h2>{win}</h2>
    </div>
  );
};

export default GameOver;
