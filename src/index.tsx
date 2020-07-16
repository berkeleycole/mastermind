import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App";
import gameReducer, {
  initialState as initialGameState
} from "./slices/gameSlice";
import * as serviceWorker from "./serviceWorker";

const preloadedState = {
  game: initialGameState
};

const store = configureStore({
  reducer: combineReducers({ game: gameReducer }),
  preloadedState
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
