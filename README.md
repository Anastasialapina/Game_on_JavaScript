# Game on JavaScript


This paper describes the process of developing a game in JavaScript. The program [Tiled](https://www.mapeditor.org/) was used for development - to create levels of the game. As well as HTML, CSS, and JS codes necessary for creating a web application.. The game consists of 2 levels, the main goal is to reach the exit, collect the largest number of coins. At each level 3 lifes, which can be lost at colliding with an enemy or a fireball. When passing level 1, level 2 becomes available.

### Try to play now [https://lapinaanastasia.itch.io/game-on-javascript](https://lapinaanastasia.itch.io/game-on-javascript)

## Installation

The program was written using WebStorm so no additional installation is required. It can be run in any IDE that supports web development.

## Game

This game is a field with a player, chests that add coins, fireballs that reduce the number of lives, and enemies. At the start of the game, only 1 level is available, and 2 is blocked until 1 is completed. Start page - enter the game:
![alt text](https://i.ibb.co/fXkVmSY/entry.png)

## 1st level:
![alt text](https://i.ibb.co/qmnt8Vw/1.png)

## 2nd level:
![alt text](https://i.ibb.co/L888LhR/2.png)

## Implementation
The first page is the page where the player enters their name. When you enter the page, the last entered name is entered into the input field, which is saved in LocalStorage.

The game page is a screen where the buttons are located: "LEVEL 1" - to start the game at level 1, "LEVEL 2" - activated when passing level 1, "Help" - a modal window appears with a description of the game, "Leaderboard" - for displaying records. The page also displays a field implemented using canvas and interface elements: player name, level, current number of coins, lives and information about control keys.

### 1) SpriteManager
Responsible for rendering sprites.

### 2) Events Manager
Responsible for determining the actions that will be performed in the game, certain keys are assigned to these actions, and these actions are bound to the context of the game.

### 3) AudioManager
Responsible for loading sound files and playing them. Music has been added to the game that plays when a coin is added, a player's lives are reduced, when a player is teleported, and when he is won and lost.

### 4) GameManager
It implements the general logic of the game and combines the rest of the Managers. Contains the Game function - which starts when the player enters, Level - for the actions taking place inside each level.

### 5) ObjectManager
To implement all objects that can move around the map, the player variable and the Enemy class were created, which have fields that characterize their coordinates on the map and other attributes, as well as methods that return and change data inside the object.

### 6) PhysicManager
Contains methods for checking events: colliding with an enemy or fire, hitting a cell with a coin and ending the game in case of losing lives or reaching a door with an exit, as well as updating coins and lives.

### 7) RecordTableManager
Responsible for saving, adding records, as well as drawing the table with records and its appearance in the form of a modal window.

### 8) MapManager
Responsible for loading the file with the level, parsing this file and drawing the map.

### 9) SaveUserName
Stores the username in LocalStorage.

## How it works

[![Watch the video](https://i.ibb.co/L888LhR/2.png)](https://youtu.be/15xsV8cUw8U)
