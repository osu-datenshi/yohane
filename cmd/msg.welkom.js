const Discord = require('discord.js');
const { MessageButton, MessageActionRow, ButtonCollector } = require('discord-buttons');

module.exports = {
    name: "welkom",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
		let hex = 10181046;

		let button = new MessageButton()
		.setStyle('url')
		.setURL('https://datenshi.pw/osu-information')
		.setLabel('osu! server')
	  
	  	let button2 = new MessageButton()
		.setStyle('url')
		.setURL('https://mc.datenshi.pw/')
		.setLabel('Minecraft server')

		let button3 = new MessageButton()
		.setStyle('url')
		.setURL('https://datenshi.pw')
		.setLabel('Portal')
	  
	 	let row = new MessageActionRow()
		.addComponents(button3, button, button2);

		const welcome = new Discord.MessageEmbed()
		.setAuthor("ABOUT US", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.pw")
		.setColor(hex)
		.setDescription("DATENSHI is a multi-gaming community server founded in 12 April 2020 Indonesia. We have two games community server that we served to the players, there are osu! and Minecraft.\n\nosu! is the first and the largest one community server in Indonesia, we are providing the home for players who dont have any 'place' to take shelter\n\nMinecraft, this is the best solution for people who tired for clicking circles in osu! and trying to build or survive in the game.\n\nOur community is filled with amazing people and very active members that make DATENSHI is more very interesting, don't hesitate to join us!\n\n***Please click the buttons to get more informations about our server!***")
		.setImage("https://cdn.discordapp.com/attachments/728581754398572546/849187512689360906/DATENSHI_BANNER.png")

		message.channel.send({ embed: welcome, component: row})
    }
}
