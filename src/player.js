class Player {
  constructor(id, token) {
    this.id = id
    this.token = token
    this.wins = []
  }

  saveWinsToStorage() {
    var strigifiedWins = JSON.stringify(this.wins)
    localStorage.setItem('saved-wins', strigifiedWins)
  }

  retrieveWinsFromStorage() {
    var parsedWins = JSON.parse(localStorage.getItem('saved-wins'))
    // set win counter based off parsed value
  }
}
