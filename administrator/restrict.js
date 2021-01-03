const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const { query } = require("../handlers/DatabaseHandler");
const config = require("../config.json")

module.exports = function (client) {
    client.on('message', async message => {
        if (!message.content.startsWith(config.bot.prefix) || message.author.bot) return;
        const args = message.content.slice(config.bot.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'restrict') {
            if (!message.member.roles.cache.some(role => (role.name == "Community Manager" || role.name === "Chat Moderators"))) { return message.channel.send("This is reserved for ilyt, sorry!") }
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            try {
                var userInput = args.join('').toLowerCase().replace(/\s/g,'_');
                var reason = args.slice(1).join(" ");
                var getUser = await query("SELECT * FROM users WHERE username = ?", userInput)
                query("UPDATE users SET privileges = '2', notes = ? WHERE id = ?", reason, getUser[0].id)
                let color = randomcolor_1.randomColor();
                let hex = parseInt(color.replace(/^#/, ''), 16);
                const embed = new Discord.MessageEmbed()
                .setTitle("Restrict")
                .setColor(hex)
                .setDescription(`User: [` + userInput + `](https://osu.troke.id/u/` + getUser[0].id +`) has been restricted!\nReason : ` + reason +``)
                message.channel.send(embed)
                client.channels.cache.get(config.bot.bannedch).send(embed)
            } catch (ex) {
                message.channel.send("user doesnt exist");
                console.log(userInput);
            }
        }
    });
}
