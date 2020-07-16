import React from "react";
import CurrentGuess from "../components/CurrentGuess";
import LeftSideBar from "../components/LeftSideBar";
import ColorOptions from "../components/ColorOptions";
import PastGuesses from "../components/PastGuesses";

const Board: React.FC = () => {
  return (
    <main>
      <LeftSideBar />
      <CurrentGuess />
      <PastGuesses />
      <ColorOptions />
    </main>
  );
};

export default Board;
