const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.expports = {
    name: "wpscore",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
		let color = randomcolor_1.randomColor();
		let hex = parseInt(color.replace(/^#/, ''), 16);

		const embed = new Discord.MessageEmbed()
		.setTitle("Wipe Account & Delete Score Requests")
		.setColor(hex)
		.addField("Information", "**Please Read before Requests!!**\nThis channel are only for <@&699280489164308541>! You can chose to wipe all your account or select a specific mode or specific score at some beatmap in there! You need to wait after submitting your requests and we need check the scores in database")
		.addField("Format Wipe Account", "```\nUsername :\nMode Wipe : (all mode,std,mania,taiko,ctb)\nMode : (Vanilla/Relax)\nReason : (Reason wipe your account? min 20-characters)```")
		.addField("Format Delete Score", "```\nUsername :\nMap Link : \nScore : (ex. 920.000)\nMode : (std,taiko,mania,ctb)```")
		message.channel.send(embed)
    }
}