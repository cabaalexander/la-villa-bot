const {createStore, createEvent} = require('effector')

exports.startGame = createEvent()
exports.finishGame = createEvent()

const startHandler = (state) => ({...state, isInprogress: true})
const finishHandler = (state) => ({...state, isInprogress: false})

exports.store = createStore({
  isInprogress: false,
})
.on(this.startGame, startHandler)
.on(this.finishGame, finishHandler)

exports.store.watch((newStatus) => {
  console.log('[store] game')
  console.log(newStatus)
})
