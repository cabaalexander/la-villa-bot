const Discord = require('discord.js')
const commands = require('./commands')

module.exports = function Bot(botApiKey) {
  const bot = new Discord.Client()

  bot.on('ready', () => {
      console.log(`Logged in as ${bot.user.tag}!`)
  })

  bot.on('message', msg => {
    const userMessage = msg.content

    if (userMessage in commands) {
      commands[userMessage](msg)
    }
  });

  bot.login(botApiKey)
};
