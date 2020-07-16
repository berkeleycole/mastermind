/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EMPTY_COLORS, Color, GameState, ALL_COLORS } from "../common/types";

export const initialState: GameState = {
  target: [],
  currentGuess: [],
  pastGuesses: [],
  errors: []
};

const createTargetColor = (): Color => {
  return ALL_COLORS[Math.floor(Math.random() * 6)];
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame(state: GameState) {
      state.target = [
        createTargetColor(),
        createTargetColor(),
        createTargetColor(),
        createTargetColor()
      ];
      state.currentGuess = [];
      state.pastGuesses = [];
      state.errors = [];
    },
    selectColor(
      { currentGuess }: GameState,
      { payload }: PayloadAction<Color>
    ): void {
      if (currentGuess.length < 4) {
        currentGuess.push(payload);
      }
    },
    submitGuess(state: GameState): void {
      console.log(state);
      const { pastGuesses, currentGuess, target } = state;
      state.errors = [];
      console.log(currentGuess === target, currentGuess, target);
      if (currentGuess === target) {
        console.log("win");
      } else {
        pastGuesses.push(currentGuess.splice(0, currentGuess.length));
      }
    }
  }
});

export const { selectColor, submitGuess, newGame } = gameSlice.actions;

export default gameSlice.reducer;
