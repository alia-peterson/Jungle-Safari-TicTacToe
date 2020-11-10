// query selectors

var currentGame
var player1
var player2

var gameBoard = document.querySelector('.game--board')
var gameBoardSquares = document.querySelectorAll('.game--square')
var winnerBanner = document.querySelector('.banner')
var playerOneToken = document.querySelector('#player--token-one')
var playerTwoToken = document.querySelector('#player--token-two')
var playerOneWins = document.querySelector('#player--score-one')
var playerTwoWins = document.querySelector('#player--score-two')
var clearStorageButton = document.querySelector('#button--clear-memory')
var resetBoardButton = document.querySelector('#button--clear-board')

// event handlers

window.addEventListener('load', createNewGame)
clearStorageButton.addEventListener('click', deleteStoredGames)
resetBoardButton.addEventListener('click', resetBoard)

playerOneToken.addEventListener('change', function() {
  setPlayerToken(player1)
})

playerTwoToken.addEventListener('change', function() {
  setPlayerToken(player2)
})

gameBoard.addEventListener('click', function(event) {
  if (event.target.className === 'game--square') {
    assignSquareInnerText()
  }
})

// functions

function createNewGame() {
  player1 = new Player('one', '🦎')
  player2 = new Player('two', '🐒')

  currentGame = new Game(player1, player2)
  currentGame.determinePlayer()
  setBannerText()
  updateScoreFromMemory(playerOneWins, player1)
  updateScoreFromMemory(playerTwoWins, player2)
}

function assignSquareInnerText() {
  if (event.target.innerText === '') {
    event.target.innerText = currentGame.playerToken

    saveSquareToArray()
    setBannerText()
  }
  resetBoardEndGame()
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
  clearBoardSquares()
  currentGame.resetGame()
  currentGame.determinePlayer()
  setBannerText()
}

function resetBoardEndGame() {
  if (winnerBanner.innerText.includes('Wins') || winnerBanner.innerText.includes('Tie') ) {
    setTimeout(function() {
      winnerBanner.innerText = `${currentGame.playerToken}'s Turn!`
      clearBoardSquares()
    }, 800)
    updateScoreCounters()
    currentGame.resetGame()
    currentGame.determinePlayer()
  }
}

function clearBoardSquares() {
  for (var i = 0; i < gameBoardSquares.length; i++) {
    gameBoardSquares[i].innerText = ''
  }
}

function updateScoreFromMemory(playerVariable, player) {
  var retreivedWins = player.retrieveWinsFromStorage()
  if (retreivedWins) {
    playerVariable.innerText = retreivedWins.length
  } else {
    playerVariable.innerText = 0
  }
}

function updateScoreCounters() {
  var newScore = currentGame.currentPlayer.wins.length
  if (currentGame.currentPlayer.id === 'one') {
    playerOneWins.innerText = newScore
  } else if (currentGame.currentPlayer.id === 'two') {
    playerTwoWins.innerText = newScore
  }
}

function deleteStoredGames() {
  localStorage.removeItem('saved-wins-player-one')
  localStorage.removeItem('saved-wins-player-two')
  createNewGame()
}

function setPlayerToken(playerNumber) {
  var emptyBoard = [['A1', 'B1', 'C1'], ['A2', 'B2', 'C2'], ['A3', 'B3', 'C3']]
  if (deepEqual(currentGame.board, emptyBoard)) {
    setTokenGameReset(playerNumber)
  } else if (window.confirm('This action will clear the current game')) {
    resetBoard()
    setTokenGameReset(playerNumber)
  } else {
    playerOneToken.value = currentGame.player1.token
    playerTwoToken.value = currentGame.player2.token
  }
}

function setTokenGameReset(playerNumber) {
  playerNumber.token = event.target.value
  currentGame.determinePlayer()
  setBannerText()
}

function deepEqual(currentBoard, emptyBoard) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (currentBoard[i][j] !== emptyBoard[i][j]) {
        return false
      }
    }
  }
  return true
}
