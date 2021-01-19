const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/databaseHandler");

module.exports = {
    name: "verify",

    /**
     * @param {import("discord.js").Client} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        if(message.channel.type != "dm") return;
        if(!args.length || !args[0]) return message.channel.send("Token ga ketemu");
        var msg = args.join(" ")
        try {
            var user = await query("SELECT * FROM discord_tokens WHERE token = ?", msg);
            var getname = await query("SELECT * FROM users WHERE id = ?", user[0].userid);
	    let tenshiRole = client.config.role.tensi_role;
	    let DatenshiDC = client.config.bot.datenshi;
            message.channel.send("Hi, " + getname[0].username + "! Terima kasih sudah melakukan verifikasi! Sekarang kamu bisa meng-akses seluruh channel! Enjoy Have fun! Jangan lupa baca peraturan!");
	    client.guilds.cache.get(DatenshiDC).members.cache.get(message.author.id).roles.add(tenshiRole);
        } catch (error) {
            console.error(error);
        }
    }
}
