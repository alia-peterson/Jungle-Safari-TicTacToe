class Player {
  constructor(id, token) {
    this.id = id
    this.token = token
    this.wins = []
  }

  saveWinsToStorage() {
    var strigifiedWins = JSON.stringify(this.wins)
    localStorage.setItem(`saved-wins-player-${this.id}`, strigifiedWins)
  }

  retrieveWinsFromStorage() {
    var parsedWins = JSON.parse(localStorage.getItem(`saved-wins-player-${this.id}`))
    this.wins = parsedWins || []
    return parsedWins
    // set win counter based off parsed value
  }
}
