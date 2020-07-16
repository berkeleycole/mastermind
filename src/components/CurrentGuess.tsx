/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import { submitGuess, newGame } from "../slices/gameSlice";
import ColorPeg from "./ColorPeg";
import { Color, State, Guess } from "../common/types";

interface Props {
  currentGuess: Guess;
  handleSubmit: Function;
  target: Guess;
  handleStartNewGame: Function;
}

const mapPropsToDispatch = {
  handleSubmit: submitGuess,
  handleStartNewGame: newGame
};

const mapStateToProps = (
  state: State
): { currentGuess: Guess; target: Guess } => ({
  currentGuess: state.game.currentGuess,
  target: state.game.target
});

const CurrentGuess: React.FC<Props> = (props: Props) => {
  const { handleSubmit, target, handleStartNewGame } = props;
  let { currentGuess } = props;
  if (target.length === 0) {
    handleStartNewGame();
  }
  if (currentGuess.length === 0) {
    currentGuess = [Color.EMPTY, Color.EMPTY, Color.EMPTY, Color.EMPTY];
  }
  console.log(target);

  return (
    <section id="currentGuess">
      {currentGuess &&
        currentGuess.map((color: Color) => (
          <ColorPeg
            key={Math.random()}
            color={color}
            handleClick={handleSubmit}
          />
        ))}

      <button onClick={(): void => handleSubmit(currentGuess)}>
        Submit Guess
      </button>
      <button onClick={(): void => handleStartNewGame()}>New Game</button>
    </section>
  );
};

export default connect(mapStateToProps, mapPropsToDispatch)(CurrentGuess);
