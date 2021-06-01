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
		.addField("Welcome! Selamat Datang!", "\nDatenshi is reborn! The first osu! private server in Indonesia, we are back with lot of features, we bring your games to enjoy with us!")
		.addField("Rules", "\n1. Do not spam in chat\n2. Please respect each other\n3. Do not post NSFW in general!\n5. Please make sure link you osu account with discord before chat!\n6. Do not out of topic from the channels!")
		.addField("Links", "\n<:globe_with_meridians:794942554352517130> [Website](https://osu.troke.id)\n<:regional_indicator_f:794942986282205185> [Facebook Group](https://www.facebook.com/groups/osu.datenshi)\n<:heart:794942554352517130> [Donate Indonesia](https://trakteer.id/datenshi) | [Donate International](https://ko-fi.com/datenshicommunity)")
		.addField("Need some help?", "• Use command `@faq help`\n• Go to channels <#698597147553169429>\n• Mention staff <@&794913317322883073> dan <@&794852916305330196>")
		.addField("Invite Code", client.config.bot.invitecode)
		.setImage("https://cdn.troke.id/static/logos/datenshi.png")
		message.channel.send(embed)
    }
}
