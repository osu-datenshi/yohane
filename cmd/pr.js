const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "pzp")) {
	if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("Welcome To the Player Reporting Channel")
	    .setColor(hex)
            .addField("Information", "Please stick to the format below when reporting and **do not** tag admins here.\nKeep in mind to let the channel clean without any chats beside reporting, and move your ass to #general-en / #general-id to communicate or discuss")
	    .addField("Rules", "- Obviously you should do have Datenshi account.\n- You need to use your valid Datenshi and Discord account before do any kind of reports in this channel.\n- Freely to report any users here, but you need to be as `Little Tenshi` before you do reporting others, also your statement should be VALID and don't be a douchebag here.\n- `Verified Tenshi` and `Streamer` ARE NOT vulnerable and able to get ban after the facts are collected and valid.")
            .addField("Format", "```\nPlayer's username:\nLink to Player's Profile:\nReason for Reporting Player (cheating, multi-accounting):\nEvidence:```")
            message.channel.send(embed)
        }
    })
}
