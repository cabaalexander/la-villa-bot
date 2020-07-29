const fs = require('fs')

const commandsEnum = require('../../config/commandsEnum')

// dynamically get all command files but 'index.js'
const files = fs.readdirSync(__dirname)
  .filter((f) => f != 'index.js')

const exportReducer = (acc, fileName) => {
  const computeKey = fileName
    .replace(/\..*$/, '')
    .toUpperCase()
    .replace(/^/, 'V_')

  const newFileName = commandsEnum[computeKey]

  return {
    ...acc,
    [newFileName]: require(`./${fileName}`),
  }
}

// dynamically export all files
module.exports = files.reduce(exportReducer, {})
