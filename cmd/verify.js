const { query, pool } = require("../handlers/databaseHandler");

async function getTokenDaten(Token) {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT discord_tokens.userid, discord_tokens.token, users.username, discord_tokens.discord_id, discord_tokens.role_id FROM discord_tokens INNER JOIN users ON discord_tokens.userid=users.id WHERE discord_tokens.token = ?",
            [Token],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

module.exports = {
    name: "verify",

    /**
     * @param {import("discord.js").Client} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        if(message.channel.type != "dm") return;
        if(!args.length || !args[0]) return message.channel.send("Masukin token!");
        var msg = args.join(" ")
        try {
            var getDCid = message.author.id;
            var getUser = await getTokenDaten(msg);
            message.channel.send(`Hi ${getUser[0].username}! Terima kasih sudah melakukan verifikasi!`);
            let tenshiRole = "794156543204392961";
            let DatenshiGuild = client.guilds.cache.get(client.config.bot.datenshi);
            if(!DatenshiGuild.members.cache.has(getDCid)) 
            await DatenshiGuild.members.fetch(getDCid) 
            DatenshiGuild.member(message.author).roles.add(tenshiRole)
            await pool.query("UPDATE discord_tokens SET userid = ?, discord_id = ?, role_id = ? WHERE token = ?", [getUser[0].userid, getDCid, tenshiRole, msg]);
        } catch (error) {
            console.log(error);
	        message.channel.send("Token lu mana bro?");
        }
    }
}
