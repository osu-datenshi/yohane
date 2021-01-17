const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "tpsbm",

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
        .setTitle("Submit your Top Play on Datenshi !")
	    .setColor(hex)
        .addField("Information", "This channel is for submitting your best gameplay on Datenshi, we make this because the <@&703503168147030068> is putting random video on `Featured Video` at homepage, so that's why we make this, fuck owner.\nWe are selecting best gameplay and put it on our homepage for 2 weeks.\nPlease follow our rules before submitting\nYour message will auto-delete after submitting, make sure you follow the format")
	    .addField("Rules", "- **ANYONE CAN JOIN!!**\n- Your top play must be on DATENSHI, NOT ANYWHERE!\n- Just send your `.osr` file and upload it or get it on Datenshi website, **DO NOT UPLOAD USING ATTACHMENT DISCORD!!**,\n- Don't use any REPLAY EDITOR! OR WE WILL BANNED YOU!\n- **DONT SPAM!** YOU CAN ONLY SUBMIT 1 YOUR BEST GAMEPLAY!")
        .addField("Format", "```\nUsername:\nLink Replay:\nMap Link:\nMode: (std,taiko,mania,ctb)```")
        message.channel.send(embed)
    }
}