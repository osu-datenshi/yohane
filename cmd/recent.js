const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { pool } = require("../handlers/databaseHandler");

async function getUserDaten(dcID) {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT * FROM users INNER JOIN discord_tokens ON users.id=discord_tokens.userid WHERE discord_tokens.discord_id = ?",
            [dcID],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}
async function getUserRecentDaten(uid, mode) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM scores_master INNER JOIN beatmaps ON scores_master.beatmap_md5 = beatmaps.beatmap_md5 WHERE userid = ? AND special_mode = ? ORDER BY time DESC`,
            [uid, mode],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

const subcommands = {

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    vanilla: async (client, message, args) => {
        const msg = args.join(" ")
        try {
            var AmbilID = message.author.id;
            var user = await getUserDaten(AmbilID);
            // Score Mode = 0 (Vanilla), 1 (Relax)
            var recentScore = await getUserRecentDaten(user[0].userid, 0);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const formatNumber = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));

            const embed = new Discord.MessageEmbed()
            .setTitle("Recent Score For " + user[0].username)
            .setURL("https://osu.troke.id/u/" + user[0].userid)
            .setColor(hex)
            .setDescription(recentScore[0].artist + " - " + recentScore[0].title + " [" + recentScore[0].difficulty_name + "]")
		    .setThumbnail("https://a.troke.id/" + user[0].userid)
            .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
            .addField("PP:", recentScore[0].pp)
            .addField("Score:", formatNumber(recentScore[0].score))
            .addField("Accuracy:", Math.round(recentScore[0].accuracy) + "%")
            message.channel.send(embed);
        } catch (ex) {
            message.channel.send("Maaf user tidak dapat ditemukan, silahkan link account jika belum ada!");
        }
    },

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    relax: async (client, message, args) => {
        try {
            var AmbilID = message.author.id;
            var user = await getUserDaten(AmbilID);
            // Score Mode = 0 (Vanilla), 1 (Relax)
            var recentScore = await getUserRecentDaten(user[0].userid, 1);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const formatNumber = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            const embed = new Discord.MessageEmbed()
            .setTitle("Recent Score For " + user[0].username)
            .setURL("https://osu.troke.id/rx/u/" + user[0].userid)
            .setColor(hex)
            .setDescription(recentScore[0].artist + " - " + recentScore[0].title + " [" + recentScore[0].difficulty_name + "]")
            .setThumbnail("https://a.troke.id/" + user[0].userid)
            .setImage("https://assets.ppy.sh/beatmaps/" + recentScore[0].beatmapset_id + "/covers/cover.jpg")
            .addField("PP:", recentScore[0].pp)
            .addField("Score:", formatNumber(recentScore[0].score))
            .addField("Accuracy:", Math.round(recentScore[0].accuracy) + "%")
            message.channel.send(embed);
        } catch (ex) {
            console.log(ex);
            message.channel.send("Maaf user tidak dapat ditemukan, silahkan link account jika belum ada!");
        }
    }

    //# Recent subcommand template
    //nama: (client, message, args) => {
    //# code command
    //}
}

module.exports = {
    name: "recent",

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