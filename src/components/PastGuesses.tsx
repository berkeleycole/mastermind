/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import ColorPeg from "./ColorOption";
import { Color, State, Guess } from "../common/types";
import GuessFeedback from "./GuessFeedback";

interface Props {
  pastGuesses: Guess[];
}

const mapStateToProps = (state: State): Props => ({
  pastGuesses: state.game.pastGuesses
});

const PastGuesses: React.FC<Props> = (props: Props) => {
  const { pastGuesses } = props;

  return (
    <section id="pastGuesses">
      {pastGuesses.map((guess: Color[], index: number) => (
        <div key={Math.random()}>
          <p>Guess #{index + 1}</p>
          {guess.map((color: Color) => (
            <ColorPeg
              key={Math.random()}
              color={color}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              handleClick={(): void => {}}
            />
          ))}
          <p>Feedback</p>
          <GuessFeedback guess={guess} />
        </div>
      ))}
    </section>
  );
};

export default connect(mapStateToProps)(PastGuesses);
