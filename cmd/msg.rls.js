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
		.setDescription("**Mau ambil roles?**\nJika kalian ingin meng-akses seluruh channel, kalian harus memiliki roles <@&794156543204392961>. Untuk mendapatkannya silahkan [baca ini](https://osu.troke.id/discordtokens) pastikan kalian harus memiliki akun Datenshi!\n\n• <:modemania:800724455126335538> - MANIA\n• <:modeosu:800724455579713536> - STD\n• <:modetaiko:800724456070447196> - TAIKO\n• <:modefruits:800724454980190228> - CTB\n• 🔞 - Akses mantap-mantap")
		message.channel.send(embed)
		.then(message => { 
			message.react(client.config.role.mania_emoji)
			message.react(client.config.role.std_emoji)
			message.react(client.config.role.taiko_emoji)
			message.react(client.config.role.ctb_emoji)
			message.react("🔞")
		});
    }
}