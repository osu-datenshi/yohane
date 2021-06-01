const Discord = require('discord.js');
const { query, pool } = require("../handlers/databaseHandler");
const randomcolor_1 = require("randomcolor");

async function getTokenDaten(Token) {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT discord_tokens.userid, discord_tokens.token, users.username, discord_tokens.discord_id, discord_tokens.role_id, discord_tokens.verified FROM discord_tokens INNER JOIN users ON discord_tokens.userid=users.id WHERE discord_tokens.token = ?",
            [Token],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

module.exports = {
    name: "link",

    /**
     * @param {import("discord.js").Client} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     */
    run: async (client, message, args) => {
        if(message.channel.type != "dm") return;
        if(!args.length || !args[0]) return message.channel.send("Please input the token!");
        var msg = args.join(" ")
        try {
            var getDCid = message.author.id;
            var getUser = await getTokenDaten(msg);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            if(getUser[0].verified == 0) {
                const embed = new Discord.MessageEmbed()
		        .setTitle("Congratulations!")
		        .setColor(hex)
		        .setDescription(`Congratulations, your account **${getUser[0].username}** has been linked to your discord account! now you can access to all of our channels!\n\nDon't forget to read [the rules](https://osu.troke.id/doc/rules) and if you need some help, you can contact our staff!" \n\n[Website](https://osu.troke.id/) | [Facebook Group](https://www.facebook.com/groups/osu.datenshi) | [Facebook Page](https://www.facebook.com/gaming/datenshicommunity/) | [YouTube](https://www.youtube.com/channel/UCKwyGpWAD17sVpKwlRDhisw) | [GitHub](https://github.com/osu-datenshi)`)
                .setImage("https://cdn.troke.id/static/logos/datenshi.png")

                message.channel.send(embed);
                let tenshiRole = "818101962859085855";
                let DatenshiGuild = client.guilds.cache.get(client.config.bot.datenshi);
                if(!DatenshiGuild.members.cache.has(getDCid)) 
                await DatenshiGuild.members.fetch(getDCid) 
                DatenshiGuild.member(message.author).roles.add(tenshiRole)
                await pool.query("UPDATE discord_tokens SET userid = ?, discord_id = ?, role_id = ?, verified = 1 WHERE token = ?", [getUser[0].userid, getDCid, tenshiRole, msg]);
            } else {
                message.channel.send("Error: You already verified! please use `@unlink` if you want to generate new token")
            }
        } catch (error) {
            console.log(error);
	        message.channel.send("Where is your token?");
        }
    }
}
