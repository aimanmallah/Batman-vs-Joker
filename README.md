# Batman vs Joker (Redux Game)

![image](https://user-images.githubusercontent.com/47919053/72225307-08518b00-357c-11ea-9be3-4826a1ed687d.png)

## Timeframe
1 day

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS
* React
* Redux

## Game Specification
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

## Future features

In the future, I would like to add in a character selection section at the start. 
