// query selectors

var currentGame
var gameBoard = document.querySelector('.game--board')
var gameBoardSquares = document.querySelectorAll('.game--square')
var winnerBanner = document.querySelector('#banner-winner')
var playerOneEmoji = document.querySelector('#player-one-emoji')
var playerTwoEmoji = document.querySelector('#player-two-emoji')
var playerOneWins = document.querySelector('#player-one-wins')
var playerTwoWins = document.querySelector('#player-two-wins')

// event handlers

window.addEventListener('load', createNewGame)

gameBoard.addEventListener('click', function(event) {
  if (event.target.className === 'game--square') {
    assignSquareInnerText()
  }
})

// functions

function createNewGame() {
  var player1 = new Player('one', '🦎')
  var player2 = new Player('two', '🐒')

  currentGame = new Game(player1, player2)
  currentGame.determinePlayer()
  setBannerText()
  // updateScoreFromMemory(playerOneWins, player1)
  // updateScoreFromMemory(playerTwoWins, player2)
}

function assignSquareInnerText() {
  if (event.target.innerText === '') {
    event.target.innerText = currentGame.playerToken

    saveSquareToArray()
    setBannerText()
  }
  resetBoard()
}

function setBannerText() {
  var winner = currentGame.determineWinner()
  if (winner === undefined) {
    currentGame.determinePlayer()
    winnerBanner.innerText = `${currentGame.playerToken}'s Turn!`
  } else {
    winnerBanner.innerText = winner
  }
}

function saveSquareToArray() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (event.target.id === currentGame.board[i][j]) {
        currentGame.board[i][j] = event.target.innerText
      }
    }
  }
}

function resetBoard() {
  if (winnerBanner.innerText.includes('Wins') || winnerBanner.innerText.includes('Tie') ) {
    setTimeout(function() {
      winnerBanner.innerText = `${currentGame.playerToken}'s Turn!`
      for (var i = 0; i < gameBoardSquares.length; i++) {
        gameBoardSquares[i].innerText = ''
      }
    }, 800)
    updateScoreCounters()
    currentGame.resetGame()
    currentGame.determinePlayer()
  }
}

function updateScoreFromMemory(playerVariable, playerNumber) {
  // console.log(currentGame.player1.retrieveWinsFromStorage());
  if (currentGame.player1.retrieveWinsFromStorage()) {

  }
  // playerVariable.innerText = playerNumber.retrieveWinsFromStorage().length
}

function updateScoreCounters() {
  var newScore = currentGame.currentPlayer.wins.length
  if (currentGame.currentPlayer.id === 'one') {
    playerOneWins.innerText = newScore
  } else if (currentGame.currentPlayer.id === 'two') {
    playerTwoWins.innerText = newScore
  }
}
