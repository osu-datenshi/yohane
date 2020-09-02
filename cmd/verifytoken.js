const Discord = require('discord.js');
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", async message => {
        if (message.channel.type === "dm") {
            if (message.content.startsWith(config.bot.prefix + "verify")) {
                var msg = message.content;
                msg = msg.split(config.bot.prefix + "verify ");
                msg = msg[1];
                try {
                    var user = await query("SELECT * FROM discord_tokens WHERE token = ?", msg);
		            var getname = await query("SELECT * FROM users WHERE id = ?", user[0].userid)

                    message.channel.send("Hi, " + getname[0].username + "! Thank you for verifying with us! You may now speak in all text channels.");
                    client.guilds.get("698502951232077874").member(message.author).addRole("707470790169198643");
                    client.guilds.get("698502951232077874").member(message.author).setNickname(getname[0].username);
                } catch (ex) {
                    message.channel.send("token doesnt exist");
                }
            }
        }
    });
}


