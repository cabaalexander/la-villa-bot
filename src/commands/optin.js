const commandsEnum = require('../../config/commandsEnum')
const {
  store: playerStore,
  storeList: playerListStore,
  addPlayer
} = require('../stores/player')
const {store: gameStore} = require('../stores/game')
const lang = require('../../config/language')
const embed = require('../utils/embed')

module.exports = function optin(msg) {
  if (msg.content === commandsEnum.V_OPTIN) {
    const playerState = playerStore.getState()
    const gameState = gameStore.getState()
    const player = msg.author
    const {id} = player

    if (gameState.isInprogress) {
      msg.channel.send(embed(lang.gameInProgress))
      return
    }

    if (playerState[id]) {
      msg.reply(embed(lang.playerAlreadyIn))
      return
    }

    addPlayer({id, player})

    const playerNames = playerListStore.getState()
      .map(p => p.userName)
      .join(', ')

    msg.reply(lang.playerIn)
    msg.channel.send(embed(playerNames))
  }
}
