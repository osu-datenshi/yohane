const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "welkom",

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
		.setTitle("DATENSHI REBORN")
		.setColor(hex)
		.addField("Selamat Datang Kembali!", "\nDatenshi adalah server osu private pertama di Indonesia, kini kembali lagi karena banyak yang kangen termasuk saya juga, Datenshi kini dikhususkan untuk Indonesia saja, tidak akan ada lagi player luar yang akan datang kesini, karena sistem registrasi telah diperketat menggunakan Invite Code yang bisa berubah sewaktu-waktu, yuk simak dan baca sampai habis!")
		.addField("Rules", "\n• Dilarang rusuh\n• Dilarang SARA\n• Respect dengan member lainnya\n• Dilarang posting NSFW pada general, silahkan posting pada tempatnya")
		.addField("Links", "\n<:globe_with_meridians:794942554352517130> [Website](https://osu.troke.id)\n<:regional_indicator_f:794942986282205185> [Facebook Group](https://www.facebook.com/groups/osu.datenshi)\n<:heart:794942554352517130> [Donate](https://trakteer.id/osudatenshi)")
		.addField("Butuh Bantuan?", "• Gunakan command `@faq help`\n• Gunakan channel <#698597147553169429>\n• Mention staff <@&794913317322883073> dan <@&794852916305330196>")
		.addField("Invite Code", client.config.bot.invitecode)
		.setImage("https://cdn.troke.id/static/logos/datenshi.png")
		message.channel.send(embed)
    }
}