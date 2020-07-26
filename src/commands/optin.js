const commandsEnum = require('../../config/commandsEnum')
const {addPlayer} = require('../stores/players')
const lang = require('../../config/language')

const optin = (msg) => {
  const player = msg.author
  const {id} = player

  if (msg.content === commandsEnum.V_IN) {
    addPlayer({id, player})

    msg.reply(lang.playerIn)
  }
}

module.exports = optin
