# Mastermind Game

## Setup
This project follows a standard setup with `yarn`.

Github repo: git@github.com:berkeleycole/mastermind.git

setup commands:
```
  git clone git@github.com:berkeleycole/mastermind.git
  cd mastermind
  yarn
```

## Technologies Used

This project primarily leverages:
- React
- Redux
- Typescript
- Eslint

### Typescript
I know typescript wasn't required in this project, but with the opportunity to create a side project like this, I really wanted to try out the process of spinning up a new app with typescript as I've never done it before. Mostly I used the typescript project I worked on most recently as a template for how to set up the dependencies/file structure.

### Redux Toolkit (https://redux-toolkit.js.org/)
This was perhaps a mistake, but when I was starting to set up Redux, I remembered a new syntax a coworker is using called Redux Toolkit and I got distracted by the new shiny and implemented it instead of the classic redux implementation. 

Some differences that came with this syntax are primarily:
- The lack of an actions file. In redux toolkit actions are implied/created in from the reducer slices associated with the state object.
- The lack of a reducer file. For this setup take a look at the `src/slices/gameSlice` file. With redux toolkit reducers are generated with the `createSlice` function. 


### Setup Process Experience
I know this project was slated to take about 4hrs and I think in general this was true for me, but troubleshooting a few setup issues with typescript and redux toolkit together took about an extra 3hrs to set up and get working correctly. I took some significant time with a redux toolkit bug where I didn't realize that i still needed to use `combineReducers` even though I only have one reducer.

## ToDo's
Alot of things are not ideal about this project right now. Here's a list
- Styling. For sure I didn't spend much time on styling yet, everything is very rough
- Guessing Functionality. Right now you can't change a guess color sequence, ideally there would be a way to target any of the four colors and update just that one. There is a click handler passed in the component to start working on this but I didn't get to it.
- Legend. Though the feedback from each guess is correct, there's nothing that shows the user what the feedback colors mean. Green is correct placement and color. Yellow is correct color wrong place. Gray is color does not exist at all. I know these aren't the colors used in the board game, I used them simply because they were already in my enum.
- Refresh keeps game state. I know this was suggested in the requirements but I just didn't get to it. 
- Win state. Right now its just an alert, which is kind of lame, so creating some UI around starting and winning/losing games.
- Lose logic. Right now on the tenth guess also just creates an alert. Which is less than ideal. Need to add more functionality for automatically starting a new game.
- Blank spaces in the sequence. I guess the board game allow the target code to contain blank spaces, I would need to add this functionality and create an intentional blank item in the color options selection.
