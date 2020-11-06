class Game {
  constructor(player1, player2) {
    this.board = [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3']
    ]
    this.turn = 0
  }

  determineWhichPlayer() {
    if (this.turn % 2) {
      // player1's turn
      // return player1 emoji
    } else {
      // player2's turn
    }
    this.turn += 1
  }

  determineWinner() {
    // 8 different win conditions
    // else return 'it\'s a tie'
  }

  resetGame() {
    if (this.turn === 9) {
      this.board = [
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3']
      ]
      this.turn = 0
    }
  }
}

/*

A Game should include:
Two Player instances
A way to keep track of the data for the game board
A way to keep track of which player’s turn it currently is
A way to check the Game’s board data for win conditions
A way to detect when a game is a draw (no one has won)
A way to save a winning Game’s board data to the correct player’s wins array
A way to reset the Game’s board to begin a new game

*/
