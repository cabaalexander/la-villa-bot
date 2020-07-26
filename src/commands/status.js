const commandsEnum = require('../../config/commandsEnum')
const {players: playerStore} = require('../stores/players')
const lang = require('../../config/language')

const status = (msg) => {
  if (msg.content === commandsEnum.V_STATUS) {
    const currentState = playerStore.getState()
    const players = Object.values(currentState)
      .map(({username}) => username)

    if (players.length) {
      msg.channel.send(`${lang.statusNotEmpty} ${players.join(', ')}`)
    } else {
      msg.channel.send(`${lang.statusEmpty}`)
    }
  }
}

module.exports = status
