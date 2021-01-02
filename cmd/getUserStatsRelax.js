const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "stats relax")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "stats relax ");
            msg = msg[1];
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg);
                var userStats = await query("SELECT * FROM rx_stats WHERE username = ?", msg);

                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                const embed = new Discord.MessageEmbed()
                .setTitle("Stats for " + msg)
                .setURL("https://osu.troke.id/rx/u/" + user[0].id)
                .setColor(hex)
                .setThumbnail("https://a.troke.id/" + user[0].id)
                .addField("Performance (Standard)", userStats[0].pp_std, true)
                .addField("Performance (Mania)", userStats[0].pp_mania, true)
                .addField("Performance (Taiko)", userStats[0].pp_taiko, true)
                .addField("Performance (Catch The Beat)", userStats[0].pp_ctb, true)
                .addField("Country", userStats[0].country)
                message.channel.send(embed)
            } catch (ex) {
                message.channel.send("user doesnt exist");
            }
        }
    })
}
