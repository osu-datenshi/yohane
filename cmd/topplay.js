const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "tpsbm")) {
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.RichEmbed()
            .setTitle("Submit your Top Play on Datenshi !")
	    .setColor(hex)
            .addField("Information", "This channel is for submitting your best gameplay on Datenshi, we make this because the <@&703503168147030068> is putting random video on `Featured Video` at homepage, so that's why we make this, fuck owner.\nWe are selecting best gameplay and put it on our homepage for 2 weeks.\nPlease follow our rules before submitting")
	    .addField("Rules", "- **Anyone can join!**\n- Your top play must be on DATENSHI, NOT ANYWHERE!\n- Just send your `.osr` file\n- Don't use any REPLAY EDITOR! OR WE WILL BANNED YOU!\n- **DONT SPAM!** YOU CAN ONLY SUBMIT 1 YOUR BEST GAMEPLAY!")
            .addField("Format", "```\nUsername:\nLink Replay:\nMap Link:\nMode: (std,taiko,mania,ctb):```")
            message.channel.send(embed)
        }
    })
}
