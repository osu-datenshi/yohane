const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.channel.name === "report-by-user") {
            if (message.author.bot) { return }
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("New Report")
	    .setColor(hex)
            .addField("Text", "```"+message.content+"```")
            client.channels.get(config.bot.staff_general).send(embed)
            message.delete();
        }
    })
}
