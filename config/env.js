require('dotenv').config()

exports.botApiToken = process.env.BOT_API_TOKEN || '';

if (!exports.botApiToken) {
  console.error('[error] No API key provided..');
  process.exit();
}
