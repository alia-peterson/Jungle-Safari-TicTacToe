// query selectors

var currentGame
var gameBoard = document.querySelector('.game--board')
var gameBoardSquares = document.querySelectorAll('.game--square')
var winnerBanner = document.querySelector('#banner-winner')
var playerOneEmoji = document.querySelector('#player-one-emoji')
var playerTwoEmoji = document.querySelector('#player-two-emoji')

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
  // console.log(currentGame.turn);
  if (currentGame.determineWinner() === undefined) {
    currentGame.determinePlayer()
    winnerBanner.innerText = `${currentGame.playerToken}'s Turn!`
  } else {
    winnerBanner.innerText = currentGame.determineWinner()
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
    currentGame.resetGame()
  }
}
