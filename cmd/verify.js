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
        if(!args.length || !args[0])	
        const msg = args.join(" ")	
        try {	
            var user = await query("SELECT * FROM discord_tokens WHERE token = ?", msg);	
            var getname = await query("SELECT * FROM users WHERE id = ?", user[0].userid)	

            message.channel.send("Hi, " + getname[0].username + "! Terima kasih sudah melakukan verifikasi! Sekarang kamu bisa meng-akses seluruh channel! Enjoy Have fun! Jangan lupa baca peraturan!");	
            client.guilds.cache.get(client.config.bot.datenshi).member(message.author).roles.add(client.config.role.tenshi_role);	
            client.guilds.cache.get(client.config.bot.datenshi).member(message.author).setNickname(getname[0].username);

        } catch (error) {	
            console.error(error);	
            message.channel.send("Token doesn't exist");	
        }	
    }	
} 