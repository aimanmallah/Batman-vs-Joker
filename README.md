# Batman vs Joker (Redux Game)

### Timeframe
1 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS
* React
* Redux

### Game Specification
In this game you (The Player) are fighting some kind of monster (your choice). Both characters begin with 100
health points. The two health values must be represented somehow on the screen.
The UI consists of an “Attack!” button. When you click this, the following sequence should happen:
1. Two dice are rolled for The Player
2. Two dice are rolled for The Monster
3. All dice are 6-sided. For each roll pick a random number between 1 and 6. The results of all 4 rolls should
be displayed.
4. Whoever scores the lowest total will take damage and lose health points. The amount of health they
lose will be the difference between the two rolls. So: if the player rolls a 2 and a 3, and the monster rolls
a 4 and a 5, the player will take (4+5)-(3+2) = 4 damage.
4. Now the player can attack again when they like
5. If The Player loses all their health the game stops and “Game Over” is displayed in large red text.
6. If the monster loses all their health the game ends and “You Win” is displayed in large green text.

### Wins

A big win for me was practicing time functions such as setIntervals. An example of using this in the game was adding the explosion image to a div when a collision happens.

## Future features

In the future, I would like to create a scoreboard. I would also like to add in harder levels and more randomly generating alien invaders.
