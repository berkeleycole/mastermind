/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color, GameState, ALL_COLORS, Guess } from "../common/types";

export const initialState: GameState = {
  target: [],
  currentGuess: [],
  pastGuesses: [],
  errors: [],
  activeGuessIndex: 0
};

const createTarget = (): Guess => {
  const targetArray = [];
  for (let i = 0; i < 4; i++) {
    targetArray.push(ALL_COLORS[Math.floor(Math.random() * 7)]);
  }
  return targetArray;
};

const compareGuesses = (a: Guess, b: Guess) => {
  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    newGame(state: GameState) {
      state.target = createTarget();
      state.currentGuess = [Color.EMPTY, Color.EMPTY, Color.EMPTY, Color.EMPTY];
      state.pastGuesses = [];
      state.errors = [];
    },
    setActiveGuessIndex(
      state: GameState,
      { payload }: PayloadAction<number>
    ): void {
      console.log("Running setActive reducer :::", payload);
      state.activeGuessIndex = payload;
    },
    selectColor(
      { currentGuess, activeGuessIndex }: GameState,
      { payload }: PayloadAction<Color>
    ): void {
      console.log("Running selectColor reducer :::", payload);
      currentGuess[activeGuessIndex] = payload;
    },
    submitGuess(state: GameState): void {
      console.log(state);
      const { pastGuesses, currentGuess, target } = state;
      state.errors = [];

      if (compareGuesses(currentGuess, target)) {
        alert("You win!!");
      } else if (pastGuesses.length + 1 === 10) {
        alert("You lose!!");
      } else {
        pastGuesses.push(currentGuess.splice(0, currentGuess.length));
      }
    }
  }
});

export const {
  selectColor,
  submitGuess,
  newGame,
  setActiveGuessIndex
} = gameSlice.actions;

export default gameSlice.reducer;
