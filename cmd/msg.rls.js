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
		.setTitle("Roles")
		.setColor(hex)
		.addField("💡 Common Roles", "<@&818101962859085855> - Access to all channels by getting this roles, you must link your account using our Bot, [how to get](https://osu.troke.id/discordtokens)\n<@&836434045205217290> - This roles is for our minecraft servers\n<@&794909882724646912> - This roles are optional (only available for indonesia), if you want to get this roles, please [read this](https://osu.troke.id/liveplay)\n<@&713455119676473445> - Access to R18+ channels, this need Little Demons role before get this role")
        .addField("<:modeosu:800724455579713536> Mode Roles", "<@&836435419436154941> - If you are vanilla player, get this roles!\n<@&763293295949905950> - If you are relax player, get this roles!\n<@&705431734526672968> - osu!std\n<@&705431799114760253> - osu!taiko\n<@&705431835710062635> - osu!catch\n<@&705431631925739631> - osu!mania")
        .addField("🔵 How to get roles?", "Use command `!roles [options]` here\nAvailable roles options :\n`r18`, `minecraft`, `vanilla`, `relax`, `std`, `ctb`, `taiko`, `mania`")
		message.channel.send(embed)
    }
}