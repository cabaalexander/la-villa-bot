const {createStore, createEvent} = require('effector')
const _omit = require('lodash.omit')
const _merge = require('lodash.merge')

const Player = require('../constructors/player')
const enhance = require('./utils/enhance')

// events
exports.addPlayer = createEvent()
exports.removePlayer = createEvent()
exports.setCard = createEvent()
exports.resetPlayer = createEvent()

// handlers
const addHandler = (state, {id, player: discordUser}) => ({
  ...state,
  [id]: new Player(discordUser)
})
const removeHandler = (state, id) => _omit(state, id)
const setCardHandler = (state, {id, card}) => {
  if (state[id]) {
    return _merge({}, state, {[id]: {card}})
  } else {
    return state
  }
}

// stores
exports.store = createStore({})
  .on(this.addPlayer, addHandler)
  .on(this.removePlayer, removeHandler)
  .on(this.setCard, setCardHandler)
  .reset(this.resetPlayer)
exports.storeList = this.store.thru(enhance((st) => Object.values(st)))

exports.store.watch((newStatus) => {
  console.log('[store] players')
  console.log(newStatus)
})
