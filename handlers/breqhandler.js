const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.channel.id === (config.bot.beatmapreqch)) {
			if (message.author.bot) { return }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("New Request by " + message.member.nickname)
			.setColor(hex)
			.setDescription(message.content)
			client.channels.cache.get(config.bot.bat).send(embed)
			message.delete();
		}
	})
}
