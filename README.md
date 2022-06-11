# Rock Paper Scissors
This game of rock paper scissors is set up using two classes, a Player class and
a Game class. The fighters and players are dynamic and can be changed using
global variables in the main.js. If the player is a human, a parameter that is
equal to the string `human` needs to be passed in. Same is for if the player
should be the computer, pass in a `computer`. The game currently has a method on
the game class that runs the game between a human and the computer. The game can
not be currently run between two humans. 
<br><br>
The asset files should have naming conventions that match the values of the fighters because they are interpolated into a file path in the main.js to display the images.

# Game Rules
## Classic
fighterOne > fighterThree
<br><br>
fighterTwo > fighterOne
<br><br>
fighterThree > fighterTwo
## EXTRA
fighterOne > fighterThree & fighterFour
<br><br>
fighterTwo > fighterOne & fighterFive
<br><br>
fighterThree > fighterTwo & fighterFour
<br><br>
fighterFour > fighterTwo & fighterFive
<br><br>
fighterFive > fighterThree & fighterOne
