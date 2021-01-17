const Discord = require('discord.js');
const { query } = require("../handlers/databaseHandler");
const randomcolor_1 = require("randomcolor");

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

            message.channel.send("Hi, " + getname[0].username + "! Thank you for verifying with us! You may now speak in all text channels.");
            client.guilds.cache.get("698502951232077874").member(message.author).roles.add("707470790169198643");
            client.guilds.cache.get("698502951232077874").member(message.author).setNickname(getname[0].username);
            //KIRIM PESAN KE JOIN-USER
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            let joinchannel = client.channels.cache.get("752004106931142696")
            const embed = new Discord.MessageEmbed()
            .setAuthor("" + getname[0].username + " has joined the server!", "https://a.datenshi.xyz/" + user[0].userid + "", "https://datenshi.xyz/u/" + user[0].userid + "")
            .setColor(hex)
            .setDescription(`Datenshi Profile : [` + getname[0].username + `](https://datenshi.xyz/u/` + user[0].userid +`)\nDiscord Account : ${message.author}`)
            joinchannel.send(embed)


        } catch (error) {
            console.error(error);
            message.channel.send("Token doesn't exist");
        }
    }
}