const commandsEnum = require('../../config/commandsEnum')
const {
  store: playerStore,
  storeList: playerListStore,
  removePlayer
} = require('../stores/player')
const lang = require('../../config/language')
const embed = require('../utils/embed')

module.exports = function optin(msg) {
  if (msg.content === commandsEnum.V_OPTOUT) {
    const {id} = msg.author
    const playerState = playerStore.getState()

    if (!playerState[id]) {
      msg.reply(lang.playerAlreadyOut)
      return
    }

    removePlayer(id)

    const playerNames = playerListStore.getState()
      .map(p => p.userName)
      .join(', ')

    msg.reply(lang.playerOut)

    if (playerNames.length) {
      msg.channel.send(embed(playerNames))
    } else {
      msg.channel.send(embed(lang.playerClear))
    }
  }
}
