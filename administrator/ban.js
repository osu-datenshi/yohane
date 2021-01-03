const Discord = require('discord.js');
const { createConnection } = require('net');
const fetch = require('node-fetch');
const querystring = require('querystring');
const config = require("../config.json")

module.exports = function (client) {
    client.on('message', async message => {
        if (message.content.toLowerCase().startsWith(config.bot.prefix + "ban")) {
	    if (!message.member.roles.cache.some(role => (role.name == "Community Manager" || role.name === "Moderator"))) { return message.channel.send("This is reserved for ilyt, sorry!") }
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "ban ");
            msg = msg[1];
	    if (msg === "") { return message.channel.send("Error.") }
        if (msg === undefined) { return message.channel.send("This is not a valid option.") }
            try {
                var user = await query("SELECT * FROM users WHERE username = ?", msg)
                connection.query("UPDATE privileges = 0 AND ban_datetime = ? FROM users WHERE id = ?", Date.now(), user[0].id)
                
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                const embed = new Discord.MessageEmbed()
                .setTitle("Banned")
                .setDescription(`User: [` + msg + `](https://osu.troke.id/u/` + user[0].id +`) has been banned!`)
                message.channel.send(embed)
            } catch (ex) {
                message.channel.send("user doesnt exist");
            }
        }
    });
}
