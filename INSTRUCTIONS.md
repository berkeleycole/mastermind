# Mastermind game — Frontend
## Foreword
Thank you for taking the time to go through the first technical interview. The next step for us is to get a view of how you solve problems and produce code given some product specification. This should be about a three to four hour project, but spend as long as you like within a 48 hour period.
The goal of this exercise is to implement a simple board game where the user will be able to play and find a secret.
## Expectations
[x]- A completed webapp, where we can visit the URL and play the mastermind game

[ ]- Design​: doesn't have to be amazing, just playable; even ascii art is fine! (See some ui
examples below).

[x]- Code​: We’d like to see your understanding of React + Redux/Mobx or another state
management library, and how you organize components and/or styles. Bonus points if
we can refresh the browser and keep playing the same game.

[x]- README.md​: Describe how the webapp should be run locally after cloning the repo.
Hopefully this is fun; don't over polish it – it's a short time frame – but feel free to wow us as well.

## Mastermind - a board game
tl;dr:​ it's a code breaking game. The game starts by generating a secret that the human player will have to crack using the guesses provided, via the UI that you are implementing.
Picture of the board game.

### Mastermind is a two player board game.
One player - the code-maker - will pick four colored balls as the code. The game should start by picking a random code (array) of four colors.
The other player - the codebreaker - can make up to ten guesses to break the code. Your role will be to implement an interface so that the codebreaker can play.
At each turn the codebreaker makes a new guess and the code-maker gives feedback on the guess. The feedback is shown using the smaller black/white pegs on the right in the board

A black feedback peg denotes a guess that is correct in both color and position.
A white feedback peg denotes a guess that is the right color; but in the wrong position.
The game ends if the codebreaker uses all ten of their guesses without correctly guessing the code, or whenever the correct code is guessed. If you want to get fancy, some ​optional additional configurations to this game could be to allow editing to the number of guesses, or the length of the code.
## UI examples
Found around the web:
https://lh5.ggpht.com/blGhtkY7WkXLF4A1jHTSTgqk7rTvzKYKXcqtxSEosFFBN9yFxzCM5W8ne BWdF-dWbg=h900 https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/ 388/736/datas/gallery.jpg
http://markhillman.info/projects/mastermind/images/javafx.png https://s-media-cache-ak0.pinimg.com/originals/83/03/d4/8303d4afd76e1afd280f5f5709a79bb0.jpg
