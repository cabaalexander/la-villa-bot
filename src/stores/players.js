const {createStore, createEvent} = require('effector')
const _omit = require('lodash.omit')

exports.addPlayer = createEvent()
exports.removePlayer = createEvent()

const addHandler = (state, {id, player}) => ({...state, [id]: player})
const removeHandler = (state, id) => _omit(state, id)

exports.players = createStore({})
  .on(exports.addPlayer, addHandler)
  .on(exports.removePlayer, removeHandler)

exports.players.watch((newStatus) => {
  console.log('[store] players')
  console.log(newStatus)
})
