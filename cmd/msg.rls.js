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
		.setTitle("Bagaimana cara mendapatkan roles?")
		.setColor(hex)
		.setDescription("Buat yang ingin melihat ke semua channels, kalian diharuskan menghubungkan account Discord dengan account Datenshi kalian agar bisa mendapatkan role <@&818101962859085855>, untuk menghubungkannya silahkan ke [link ini](https://osu.troke.id/discordtokens)\n*Sangat disarankan menggunakan 1 account Discord dan 1 account Datenshi, selebihnya tidak bisa!*")
		message.channel.send(embed)
    }
}