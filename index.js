const {botApiToken} = require('./config/env')
const lang = require('./config/language')
const Bot = require('./src/bot')

// Start the bot
Bot(botApiToken)

// Log the bot's language
console.log(lang.botLanguageLog)
