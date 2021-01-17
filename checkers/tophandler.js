const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

/**
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Message} message 
 */
module.exports = (client, message) => {
    if (message.channel.id === (client.config.bot.submitgameplay)) {
        if (message.author.bot) return;
        let color = randomcolor_1.randomColor();
        let hex = parseInt(color.replace(/^#/, ''), 16);

        const embed = new Discord.MessageEmbed()
        .setTitle("New upload by " + message.member.nickname)
        .setColor(hex)
        .setDescription(message.content)
        client.channels.cache.get(client.config.bot.topplay).send(embed)
        message.delete();
    }
}