import discord
from dotenv import load_dotenv
from os import getenv

load_dotenv()

bot_api_key = getenv('BOT_API_KEY')

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run(bot_api_key)
