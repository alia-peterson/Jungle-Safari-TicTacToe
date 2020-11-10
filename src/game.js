class Game {
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = ''
    this.playerToken = ''
    this.turn = 0
    this.playerTracker = generateNumber()
    this.board = [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3']
    ]
  }

  determinePlayer() {
    if (this.playerTracker % 2 === 0) {
      this.currentPlayer = this.player1
      this.playerToken = this.player1.token
    } else {
      this.currentPlayer = this.player2
      this.playerToken = this.player2.token
    }
    this.turn += 1
    this.playerTracker += 1
  }

  determineWinner() {
    if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) {
      return this.returnPlayer()
    } else if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]) {
      return this.returnPlayer()
    } else if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]) {
      return this.returnPlayer()
    } else if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) {
      return this.returnPlayer()
    } else if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]) {
      return this.returnPlayer()
    } else if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) {
      return this.returnPlayer()
    } else if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
      return this.returnPlayer()
    } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
      return this.returnPlayer()
    } else if (this.turn >= 10) {
      return `It's a Tie!`
    }
  }

  returnPlayer() {
    this.currentPlayer.wins.push(this.board)
    this.currentPlayer.saveWinsToStorage()
    return `${this.playerToken} Wins!`
  }

  resetGame() {
    this.board = [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3']
    ]
    this.turn = 1
    this.playerTracker = generateNumber()
  }
}

function generateNumber() {
  return Math.floor(Math.random() * 100)
}
