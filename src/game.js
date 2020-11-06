class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.playerToken = ''
    this.turn = 0
    this.board = [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3']
    ]
  }

  determineWhichPlayer() {
    if (this.turn % 2 === 0) {
      this.playerToken = this.player1.token
    } else {
      this.playerToken = this.player2.token
    }
    this.turn += 1
  }

  determineWinner() {
    // 8 different win conditions
    // else return 'it\'s a tie'
    if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return `${this.playerToken} Wins!`
    } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return `${this.playerToken} Wins!`
    // } else {
    //   return `${this.playerToken}'s Turn!`
    }
  }

  resetGame() {
    this.board = [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3']
    ]
    this.turn = 0
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
