const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "r9")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.RichEmbed()
			.setTitle("Roles Request Channel")
			.setColor(hex)
            		.addField("Information", "This is channels is closed, we are moving the new system for getting new roles!!")
            		.addField("How to Get?", "You can get the roles from [This Page](https://datenshi.xyz/discordtokens), you must login or create the account in the website before generate new token!")
            		.addField("Can i Ask?", "No, Just follow easy steps on the website! Enjoy")
			message.channel.send(embed)
		}
	})
}
