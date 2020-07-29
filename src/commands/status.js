const commandsEnum = require('../../config/commandsEnum')
const {store} = require('../stores/player')
const lang = require('../../config/language')
const embed = require('../utils/embed')

module.exports = function status(msg) {
  if (msg.content === commandsEnum.V_STATUS) {
    const playerState = store.getState()
    const players = Object.values(playerState)
      .map(({userName}) => userName)

    if (players.length) {
      msg.channel.send(lang.statusNotEmpty)
      msg.channel.send(embed(players.join(' ')))
    } else {
      msg.channel.send(embed(lang.statusEmpty))
    }
  }
}
