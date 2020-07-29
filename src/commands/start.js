const _chunk = require('lodash.chunk')
const _shuffle = require('lodash.shuffle')

const embed = require('../utils/embed')
const commandsEnum = require('../../config/commandsEnum')
const cardsEnum = require('../../config/cardsEnum')
const {
  storeList: playerListStore,
  setCard,
} = require('../stores/player')
const {store: gameStore, startGame} = require('../stores/game')
const lang = require('../../config/language')
const Card = require('../constructors/card')

module.exports = function start(msg) {
  if (msg.content === commandsEnum.V_START) {
    const gameState = gameStore.getState()

    if (gameState.isInprogress) {
      msg.channel.send(embed(lang.gameInProgress))
      return
    }

    const playerList = _shuffle(playerListStore.getState())

    // if not enough players return
    if (playerList.length < 1) {
      msg.channel.send(embed(lang.gameNotEnoughPlayers))
      return
    }

    // a third of the players are wolves
    const third = (num) => Math.round(num / 3) || 1
    const thirdOfPlayers = _chunk(
      playerList,
      third(playerList.length)
    )

    // add card to players (third of players are wolves)
    thirdOfPlayers.forEach((chunkOfPlayers, idx) => {
      const cardType = idx === 0
        ? cardsEnum.WOLF
        : cardsEnum.HUMAN
      chunkOfPlayers.forEach((player) => setCard({
        id: player.discord.id,
        card: new Card(cardType)
      }))
    })

    playerList.forEach(async (player) => {
      await player.discord.send(player.card.message)
        .catch((err) => console.error(err))
    })

    startGame()
    msg.channel.send(embed(lang.gameStart))
  }
}
