const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/databaseHandler");

const subcommands = {

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    vanilla: async (client, message, args) => {
        const msg = args.join(" ")

        try {
            var user = await query("SELECT * FROM users WHERE username = ?", msg);
            var userStats = await query("SELECT * FROM users_stats WHERE username = ?", msg);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.MessageEmbed()
            .setTitle("Stats for " + msg)
            .setURL("https://osu.troke.id/u/" + user[0].id)
            .setColor(hex)
            .setThumbnail("https://a.troke.id/" + user[0].id)
            .addField("Performance (Standard)", userStats[0].pp_std, true)
            .addField("Performance (Mania)", userStats[0].pp_mania, true)
            .addField("Performance (Taiko)", userStats[0].pp_taiko, true)
            .addField("Performance (Catch The Beat)", userStats[0].pp_ctb, true)
            .addField("Country", userStats[0].country)
            message.channel.send(embed)
        } catch (ex) {
            message.channel.send("User doesn't exist");
        }
    },

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    relax: async (client, message, args) => {
        const msg = args.join(" ")

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
            message.channel.send("User doesn't exist");
        }
    }

    //# Stats subcommand template
    //nama: (client, message, args) => {
    //# code command
    //}
}

module.exports = {
    name: "stats",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if(!args.length || !args[0]) return message.channel.send("This is not a valid option.");
        const subcmd = args.shift()
        const sub = subcommands[subcmd]
        if(!sub) return;

        return sub(client, message, args)
    }
}