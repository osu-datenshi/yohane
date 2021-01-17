require("events").EventEmitter.prototype._maxListeners = 100

const config = require("./config.json")
const Discord = require("discord.js")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})

client.config = config

const token = config.bot.token

client.login(token)
global.naughtyWords = config.blacklisted_words

client.commands = new Discord.Collection() //having a command handler is fcking better than register new command manually using require
client.on("message", (message) => {
    require("fs").readdirSync("checkers").forEach(ev => require(`./checkers/${ev}`)(client, message))
})
require("./handlers/commandHandler")(client)
require("./handlers/eventHandler")(client)