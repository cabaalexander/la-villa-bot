const Discord = require('discord.js')
const commands = require('./commands')

module.exports = function Bot(botApiKey) {
  const bot = new Discord.Client()

  bot.on('ready', () => {
      console.log(`Logged in as ${bot.user.tag}!`)
  })

  bot.on('message', msg => {
    // dynamically run all commands
    Object.values(commands).forEach((func) => {func(msg)})
  });

  bot.login(botApiKey)
};
