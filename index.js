const {botApiToken} = require('./config/env')
const Bot = require('./src/bot')

Bot(botApiToken);
