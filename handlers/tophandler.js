const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.channel.name === "submit-gameplay") {
			if (message.author.bot) { return }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.RichEmbed()
			.setTitle("New upload by " + message.member.nickname)
			.setColor(hex)
			.setDescription(message.content)
			client.channels.get(config.bot.topplay).send(embed)
			message.delete();
		}
	})
}
