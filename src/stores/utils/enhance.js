module.exports = function enhance(fn) {
  return store => store.map(fn)
}
