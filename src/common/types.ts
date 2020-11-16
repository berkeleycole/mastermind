// Color Constants
export enum Color {
  EMPTY = "gray",
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
  PURPLE = "purple",
  YELLOW = "yellow",
  AQUA = "aqua"
}

export const ALL_COLORS = [
  Color.EMPTY,
  Color.BLUE,
  Color.GREEN,
  Color.RED,
  Color.PURPLE,
  Color.YELLOW,
  Color.AQUA
];

export const EMPTY_COLORS = [
  Color.EMPTY,
  Color.EMPTY,
  Color.EMPTY,
  Color.EMPTY
];

export type Guess = Color[];

export type GameState = {
  target: Guess;
  currentGuess: Guess;
  pastGuesses: Guess[];
  errors: string[];
  activeGuessIndex: number;
};

export type State = {
  game: GameState;
};
