// query selectors

var currentGame
var gameBoard = document.querySelector('.container--game-board')
var gameBoardSquares = document.querySelectorAll('.container--game-board-square')
var winnerBanner = document.querySelector('#banner-winner')
var playerOneEmoji = document.querySelector('#player-one-emoji')
var playerTwoEmoji = document.querySelector('#player-two-emoji')

// event handlers

window.addEventListener('load', createNewGame)

gameBoard.addEventListener('click', function(event) {
  if (event.target.className === 'container--game-board-square') {
    asignSquareInnerText()
  }
})

// functions

function createNewGame() {
  var player1 = new Player('one', '🦎')
  var player2 = new Player('two', '🐒')

  currentGame = new Game(player1, player2)
  currentGame.determineWhichPlayer()
}

function asignSquareInnerText() {
  if (event.target.innerText === '') {
    event.target.innerText = currentGame.playerToken
    currentGame.determineWhichPlayer()
  }
  saveSquareToArray()
  winnerBanner.innerText = currentGame.determineWinner()
  resetBoard()
}

function saveSquareToArray() {
  for (var i = 0; i < 3; i++) {
    // console.log(currentGame.board[i])
    for (var j = 0; j < 3; j++) {
      if (event.target.id === currentGame.board[i][j]) {
        currentGame.board[i][j] = event.target.innerText
        // console.log(currentGame.board[i])
      }
    }
  }
}

function resetBoard() {
  if (winnerBanner.innerText.includes('Wins') || currentGame.turn >= 10) {
    for (var i = 0; i < gameBoardSquares.length; i++) {
      gameBoardSquares[i].innerText = ''
    }
    currentGame.resetGame()
    currentGame.determineWhichPlayer()
  }
}
