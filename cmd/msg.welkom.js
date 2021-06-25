const Discord = require('discord.js');

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

		const bannerWelcome = new Discord.Message().setColor(hex).setImage("https://cdn.discordapp.com/attachments/728581754398572546/849187512689360906/DATENSHI_BANNER.png")

		const welcome = new Discord.MessageEmbed()
		.setAuthor("ABOUT US", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.troke.id")
		.setColor(hex)
		.setDescription("DATENSHI is a multi-gaming community server founded in 12 April 2020 Indonesia. We have two games community server that we served to the players, there are osu! and Minecraft.\n\nosu! is the first and the largest one community server in Indonesia, we are providing the home for players who dont have any 'place' to take shelter\n\nMinecraft, this is the best solution for people who tired for clicking circles in osu! and trying to build or survive in the game.\n\nOur community is filled with amazing people and very active members that make DATENSHI is more very interesting, don't hesitate to join us!")

		const bannerosu = new Discord.Message().setColor(hex).setImage("https://cdn.discordapp.com/attachments/728581754398572546/849194673507663933/osu.png")

		const osu = new Discord.MessageEmbed()
		.setAuthor("osu! server", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://osu.troke.id")
		.setColor(hex)
		.setDescription("If you are osu! player, please read this\n")
		.addField("Invite Code", "" + client.config.bot.invitecode + "Please use this code for registration!")
		.addField("Connecting Guide", "You can go to the [website](https://osu.troke.id/doc/1) for the tutorial")
		.addField("Help Assistant", "If you need some help, go to this channel <#853228318400708649>")

		const bannerminecraft = new Discord.MessageEmbed().setColor(hex).setImage("https://cdn.discordapp.com/attachments/728581754398572546/849196032486015046/minecraft.png")

		const minecraft = new Discord.MessageEmbed()
		.setAuthor("Minecraft server", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.troke.id")
		.setColor(hex)
		.setDescription("If you are Minecraft player, please read this\n")
		.addField("Server IP", "`mc.troke.id`")
		.addField("Version", "1.16.5")
		.addField("Features", "- Shop\n- Discord Integration\n- Survival Mode\n- Gacha Crates\n- Vote Rewards\nMuch more..")
		.addField("Help Assistant", "If you need some help, go to this channel <#853236312466522142>")

		const bannerlinks = new Discord.MessageEmbed().setColor(hex).setImage("https://cdn.discordapp.com/attachments/728581754398572546/849197933714341888/links_1.png")

		const linksbro = new Discord.MessageEmbed()
		.setAuthor("LINKS", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.troke.id")
		.setColor(hex)
		.setDescription("- [Website](https://datenshi.troke.id)\n- [osu! Website](https://osu.troke.id)\n- [osu! Documentation](https://osu.troke.id/doc)\n- [osu! Register](https://osu.troke.id/register)\n- [GitHub](https://github.com/osu-datenshi)\n- [GitLab](https://gitlab.com/osudatenshi)\n- [Facebook Page](https://www.facebook.com/datenshicommunity)\n- [Facebook Group](https://www.facebok.com/groups/osu.datenshi)\n- [Youtube](https://www.youtube.com/channel/UCKwyGpWAD17sVpKwlRDhisw)\n- [Donate](https://datenshi.troke.id/donations)")

		message.channel.send({ bannerWelcome })
		message.channel.send(welcome)
		message.channel.send({ bannerosu })
		message.channel.send(osu)
		message.channel.send({ bannerminecraft })
		message.channel.send(minecraft)
		message.channel.send({ bannerlinks })
		message.channel.send(linksbro)
    }
}
