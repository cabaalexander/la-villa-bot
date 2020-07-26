const commandsEnum = require('../../config/commandsEnum')
const {removePlayer} = require('../stores/players');
const lang = require('../../config/language')

const optin = (msg) => {
  const {id} = msg.author

  if (msg.content === commandsEnum.V_OUT) {
    removePlayer(id);

    msg.reply(lang.playerOut)
  }
}

module.exports = optin
