const embed = require('../utils/embed')
const commandsEnum = require('../../config/commandsEnum')
const {resetPlayer} = require('../stores/player')
const {store: gameStore} = require('../stores/game')
const lang = require('../../config/language')
const {finishGame} = require('../stores/game')

module.exports = function finish(msg) {
  if (msg.content === commandsEnum.V_FINISH) {
    const gameState = gameStore.getState()

    // if game is not started let that know
    if (!gameState.isInprogress) {
      msg.channel.send(embed(lang.gameAlreadyFinished))
      return
    }

    finishGame()
    resetPlayer()
    msg.channel.send(embed(lang.gameFinished))
  }
}
