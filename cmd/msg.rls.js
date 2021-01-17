const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "rls",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if(message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
		let color = randomcolor_1.randomColor();
		let hex = parseInt(color.replace(/^#/, ''), 16);

		const embed = new Discord.MessageEmbed()
		.setTitle("Ambil Roles!")
		.setColor(hex)
		.setDescription("**Ayo ambil roles kalian!**\n\n• ✅ - Akses ke seluruh channel\n • <:m_mania:705708743865794601> - MANIA\n• <:m_std:705708980562821151> - STD\n• <:m_taiko:705708901068439562> - TAIKO\n• <:m_ctb:705708831497519124> - CTB\n• 🔞 - Akses mantap-mantap\n• ⚠️ - Ping-me! Notifikasi")
		message.channel.send(embed)
		.then(message => { 
			message.react(client.config.er.tenshie)
			message.react(client.config.er.maniae)
			message.react(client.config.er.stde)
			message.react(client.config.er.taikoe)
			message.react(client.config.er.ctbe)
			message.react("🔞")
			message.react("⚠️")
		});
    }
}