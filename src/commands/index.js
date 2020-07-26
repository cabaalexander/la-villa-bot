const fs = require('fs')

// dynamically get all command files but 'index.js'
const files = fs.readdirSync(__dirname)
  .filter((f) => f != 'index.js')

// dynamically export all files
module.exports = files.reduce((acc, fileName) => ({
  ...acc,
  [fileName.replace(/\..*$/, '')]: require(`./${fileName}`),
}), {})
