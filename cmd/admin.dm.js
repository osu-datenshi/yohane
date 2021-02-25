const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "dm",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        let color = randomcolor_1.randomColor();
		let hex = parseInt(color.replace(/^#/, ''), 16);
        let mention = message.mentions.users.first();
        console.log(mention);
        if (message.channel.type == "dm") return message.author.send("You cannot use this on DM!");
        if (!mention) return message.channel.send("Can't find user!");
        if (!message.member.roles.cache.some(role => (role.name == "Community Manager" || role.name === "Moderator"))) return message.channel.send("This is reserved for ilyt, sorry!");

		const embed = new Discord.MessageEmbed()
		.setTitle("Congratulations!")
		.setColor(hex)
		.setDescription("Your IP Address has been whitelisted, now you can register on our website!\nPlease make sure to read the rules before you start registering on our website!\nif we found you breaking our rules, we can do ban instantly for you!\n\n[Register](https://osu.troke.id/register) | [Rules](https://osu.troke.id/doc/rules) | [Get Member Roles](https://osu.troke.id/discordtokens)")
        mention.send(embed);
        message.channel.send(`${message.author} You have sent your message to ${mention}`);
    }

}