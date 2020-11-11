# Jungle-Safari-TicTacToe

This Jungle Safari Tic-Tac-Toe game is a solo project assigned by Turing School. This project allows the user to play a two-person tic-tac-toe game in their browser. The goal of this project was to create a functioning Tic-Tac-Toe game by utilizing the technologies that have been taught so far in class without help from classmates. This game was created entirely by Alia Peterson, who can be contacted via github @alia-peterson.  

## Installation
In order to view this repository, a user must be a contributor as this repository is private at this time. If a user is a contributor, they may access the website by following the steps below:  

Visit the Github repository here: [Jungle-Safari-Tic-Tac-Toe](https://github.com/alia-peterson/Jungle-Safari-TicTacToe)  
Clone the reposity to your local machine  
In the local repository, enter `open index.html` into your terminal  

## Technologies Used 
- JavaScript
- HTML
- CSS

## Reflections
I think the biggest win for me in this project was the extension. I learned how to create and utilize a select element and how to implement the selection into the game. This functionality only took a couple iterations so it was a positive learning experience. The Local Storage components took a little while for me to figure out as I was trying to store data from both players into one storage element. Once I realized it was best to split the storage into two elements, the rest of the functionality was easier to implement. 

## Usage
When the website is loaded, this is what the user should see:  
![image](https://user-images.githubusercontent.com/70297733/98743192-d9a76b00-236c-11eb-96a9-f705b87500a2.png)

The first player to go will be displayed in the banner above the game board. Each time a player selects a game square, the banner will update to show that it is the next player's turn.  
![image](https://user-images.githubusercontent.com/70297733/98742669-1161e300-236c-11eb-9b79-3b5923d9c94e.png)  

Each player's token will start as the default emojis in the selection list. Users may customize their token by selecting the drop down on their score board. If the game board is empty, the token will be updated when a new one is selected. If the players are in the middle of a game, an alert will be displayed to ensure that the players would like to restart the game in order to update the token.  
![image](https://user-images.githubusercontent.com/70297733/98743094-bb416f80-236c-11eb-9cb1-0ccf6126bc9f.png)

The scores for each player will be updated when a win occurs and will be stored in the browser's Local Storage. If the user refreshes the page, or leaves the website and returns at a later time, the scores will be populated by the scores saved in Local Storage.  
![image](https://user-images.githubusercontent.com/70297733/98743118-c09eba00-236c-11eb-8f21-4272f468cedd.png)

There are two buttons below the game board: a Reset Board button and a Clear Saved Games button. The Reset Board button can be clicked in the middle of the game and will clear the current game without affecting the scores of each player. The Clear Saved Games button will clear both players scores without clearing the current game.  
![image](https://user-images.githubusercontent.com/70297733/98742833-58e86f00-236c-11eb-84cf-480c0fb338c9.png)  

## Code Architecture

### Player.js
This file contains the player class methods that store and retrieve data from the browser's Local Storage. The data being stored in this case is the board state for each win.

### Game.js
This file has the game class methods which control the game state, including: determining player order, determining when a win occurs and returning the winning player, and reseting the board array when a win or tie occurs. 

### Main.js
This file contains the functions which control the user interface and interactions with the DOM. Anything that isn't specific to updating the player or game classes lives in this file.

## Future Iterations
One of the example iterations was to show the win game boards for each player. The way that I programmed the Local Storage means that this should be a reasonable extension, so it is likely one that I will work on in my spare time. 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
