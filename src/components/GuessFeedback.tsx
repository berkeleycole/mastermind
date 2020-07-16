import React from "react";
import { connect } from "react-redux";
import CSS from "csstype";
import { Color, State, Guess } from "../common/types";

interface Props {
  guess: Guess;
  target: Guess;
}

const mapStateToProps = (state: State): { target: Guess } => ({
  target: state.game.target
});

const styles = (color: Color): CSS.Properties => {
  return {
    height: "12px",
    width: "12px",
    backgroundColor: color,
    borderRadius: "50%"
  };
};

const GuessFeedback: React.FC<Props> = (props: Props) => {
  const { guess, target } = props;

  const feedbackArray = guess.map((color, index) => {
    let feedback;
    if (target[index] === color) {
      // if color exists in the same index in target, put green
      feedback = Color.GREEN;
    } else if (target.includes(color)) {
      // if color exists anywhere in target, put yellow
      feedback = Color.YELLOW;
    } else {
      // else, put default grey
      feedback = Color.EMPTY;
    }
    return feedback;
  });

  return (
    <div>
      {feedbackArray.map(color => (
        <div key={Math.random()} style={styles(color)} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(GuessFeedback);
