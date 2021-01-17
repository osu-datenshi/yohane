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
            var recentScore = await query("SELECT * FROM scores INNER JOIN beatmaps ON scores.beatmap_md5 = beatmaps.beatmap_md5 WHERE userid = ? ORDER BY pp DESC;", user[0].id)
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.MessageEmbed()
            .setTitle("Top Score For " + msg)
            .setURL("https://osu.troke.id/u/" + recentScore[0].userid)
            .setColor(hex)
            .setDescription(recentScore[0].song_name)
            .setThumbnail("https://a.troke.id/" + user[0].id)
            .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
            .addField("PP:", recentScore[0].pp)
            .addField("Score:", recentScore[0].score)
            .addField("Accuracy:", Math.round(recentScore[0].accuracy) + "%")
            message.channel.send(embed);
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
            var recentScore = await query("SELECT * FROM scores_relax INNER JOIN beatmaps ON scores_relax.beatmap_md5 = beatmaps.beatmap_md5 WHERE userid = ? ORDER BY pp DESC;", user[0].id)
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.MessageEmbed()
            .setTitle("Top Score For " + msg)
            .setURL("https://osu.troke.id/rx/u/" + recentScore[0].userid)
            .setColor(hex)
            .setDescription(recentScore[0].song_name)
            .setThumbnail("https://a.troke.id/" + user[0].id)
            .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
            .addField("PP:", recentScore[0].pp)
            .addField("Score:", recentScore[0].score)
            .addField("Accuracy:", Math.round(recentScore[0].accuracy) + "%")
            message.channel.send(embed);
        } catch (ex) {
            message.channel.send("user doesnt exist");
        }
    }

    //# Top subcommand template
    //nama: (client, message, args) => {
    //# code command
    //}
}

module.exports = {
    name: "top",

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