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
		.setDescription("DATENSHI is a multi-gaming community server founded in 12 April 2020. We have two games that our community served to their players. There are osu! and Minecraft.\n\nosu! is the first and the largest one community server in Indonesia, we are providing home for players who don't have any 'place' to take shelter\n\nMinecraft, is the best solution for people who tired of clicking circles in osu! and wanted to build or survive in a game.\n\nOur community are filled with amazing people and also the members are very active, that's why DATENSHI is more interesting place, don't hesitate to join us!\n\n***Please click the buttons to get more informations about our server!***")
		.setImage("https://cdn.discordapp.com/attachments/728581754398572546/849187512689360906/DATENSHI_BANNER.png")

		message.channel.send({ embed: welcome, component: row})
    }
}
