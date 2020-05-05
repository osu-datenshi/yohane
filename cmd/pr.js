const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "pr")) {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("Welcome To the Player Reporting Channel")
            .addField("Information", "Please stick to the format below when reporting and **do not** tag admins here.")
            .addField("Format", "```\nPlayer's username:\nLink to Player's Profile:\nReason for Reporting Player (cheating, multi-accounting):\nEvidence:```")
            message.channel.send(embed)
        }
    })
}