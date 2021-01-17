const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "r9",

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
		.setTitle("Roles Request Channel")
		.setColor(hex)
        .addField("Information", "This is channels is closed, we are moving the new system for getting new roles!!")
        .addField("How to Get?", "You can get the roles from [This Page](https://osu.troke.id/discordtokens), you must login or create the account in the website before generate new token!")
        .addField("Can i Ask?", "No, Just follow easy steps on the website! Enjoy")
		message.channel.send(embed)
    }
}