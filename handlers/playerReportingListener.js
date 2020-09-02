const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.channel.id === (config.bot.reportchannel)) {
            if (message.author.bot) { return }
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.MessageEmbed()
            .setTitle("New Report by " + message.member.nickname)
	        .setColor(hex)
            .setDescription(message.content)
            client.channels.cache.get(config.bot.staff_general).send(embed)
            message.delete();
        }
    })
}
