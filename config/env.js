require('dotenv').config()

// BOT_API_TOKEN
exports.botApiToken = process.env.BOT_API_TOKEN || ''
if (!exports.botApiToken) {
  console.error(`[error] 'BOT_API_TOKEN' not provided..`)
  process.exit()
}

// LOCALE
exports.locale = process.env.LOCALE || 'eng'
