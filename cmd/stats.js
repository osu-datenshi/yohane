const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { pool, query } = require("../handlers/databaseHandler");

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
async function getUserStatsDaten(getName) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM users_stats WHERE username = ?`,
            [getName],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}
async function getUserRXStatsDaten(getName) {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT * FROM rx_stats WHERE username = ?`,
            [getName],
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
        try {
            var AmbilID = message.author.id;
            var user = await getUserDaten(AmbilID);
            var userStats = await getUserStatsDaten(user[0].username);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            var waktunya = user[0].register_datetime;
            var kali = new Date(waktunya*1000);
            const formatNumber = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            const embed = new Discord.MessageEmbed()
            .setTitle("Stats for " + user[0].username)
            .setURL("https://osu.troke.id/u/" + user[0].id)
            .setColor(hex)
            .setThumbnail("https://a.troke.id/" + user[0].id)
            .addField("**Stats**", "Username : " + user[0].username + "\nUserID : " + user[0].id + "\nJoined : " + kali.toGMTString() + "\nCountry : " + userStats[0].country + "")
            .addField("**Performance Points**","<:modeosu:800724455579713536> : " + formatNumber(userStats[0].pp_std) + "pp ▸ (" + userStats[0].avg_accuracy_std.toFixed(2) + "%)\n<:modemania:800724455126335538> : " + formatNumber(userStats[0].pp_mania) + "pp ▸ (" + userStats[0].avg_accuracy_mania.toFixed(2) + "%)\n<:modetaiko:800724456070447196> : " + formatNumber(userStats[0].pp_taiko) + "pp ▸ (" + userStats[0].avg_accuracy_taiko.toFixed(2) + "%)\n<:modefruits:800724454980190228> : " + formatNumber(userStats[0].pp_ctb) + "pp ▸ (" + userStats[0].avg_accuracy_ctb.toFixed(2) + "%)")
            .addField("**Ranked Scores**", "<:modeosu:800724455579713536> : " + formatNumber(userStats[0].ranked_score_std) + " ▸ (Lv. " + userStats[0].level_std + ")\n<:modemania:800724455126335538> : " + formatNumber(userStats[0].ranked_score_mania) + " ▸ (Lv. " + userStats[0].level_mania + ")\n<:modetaiko:800724456070447196> : " + formatNumber(userStats[0].ranked_score_taiko) + " ▸ (Lv. " + userStats[0].level_taiko + ")\n<:modefruits:800724454980190228> : " + formatNumber(userStats[0].ranked_score_ctb) + " ▸ (Lv. " + userStats[0].level_mania + ")")
            message.channel.send(embed)
        } catch (ex) {
            console.log(ex);
            message.channel.send("User not found, please @link first!");
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
            var userStats = await getUserRXStatsDaten(user[0].username);
            var contri = await getUserStatsDaten(user[0].username);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            var waktunya = user[0].register_datetime;
            var kali = new Date(waktunya*1000);
            const formatNumber = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
            const embed = new Discord.MessageEmbed()
            .setTitle("Stats for " + user[0].username)
            .setURL("https://osu.troke.id/rx/u/" + user[0].id)
            .setColor(hex)
            .setThumbnail("https://a.troke.id/" + user[0].id)
            .addField("**Stats**", "Username : " + user[0].username + "\nUserID : " + user[0].id + "\nJoined : " + kali.toGMTString() + "\nCountry : " + contri[0].country + "")
            .addField("**Performance Points**","<:modeosu:800724455579713536> : " + formatNumber(userStats[0].pp_std) + "pp ▸ (" + userStats[0].avg_accuracy_std.toFixed(2) + "%)\n<:modetaiko:800724456070447196> : " + formatNumber(userStats[0].pp_taiko) + "pp ▸ (" + userStats[0].avg_accuracy_taiko.toFixed(2) + "%)\n<:modefruits:800724454980190228> : " + formatNumber(userStats[0].pp_ctb) + "pp ▸ (" + userStats[0].avg_accuracy_ctb.toFixed(2) + "%)")
            .addField("**Ranked Scores**", "<:modeosu:800724455579713536> : " + formatNumber(userStats[0].ranked_score_std) + " ▸ (Lv. " + userStats[0].level_std + ")\n<:modetaiko:800724456070447196> : " + formatNumber(userStats[0].ranked_score_taiko) + " ▸ (Lv. " + userStats[0].level_taiko + ")\n<:modefruits:800724454980190228> : " + formatNumber(userStats[0].ranked_score_ctb) + " ▸ (Lv. " + userStats[0].level_mania + ")")
            message.channel.send(embed)
        } catch (ex) {
            message.channel.send("User not found, please @link first!");
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