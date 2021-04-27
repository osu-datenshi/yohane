const Discord = require('discord.js');
const { query, pool } = require("../handlers/databaseHandler");
const randomcolor_1 = require("randomcolor");

async function getUserDaten(discord_id) {
    return new Promise((resolve, reject) => {
        pool.query(
            "SELECT discord_tokens.* FROM discord_tokens INNER JOIN users ON discord_tokens.userid=users.id WHERE discord_tokens.discord_id = ?",
            [discord_id],
            (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

module.exports = {
    name: "unlink",

    /**
     * @param {import("discord.js").Client} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     */
    run: async (client, message) => {
        if(message.channel.type != "dm") return;
        try {
            var getDCid = message.author.id;
            var getUser = await getUserDaten(getDCid);
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            if(getUser[0].verified == 1) {
                const embed = new Discord.MessageEmbed()
		        .setTitle("Congratulations!")
		        .setColor(hex)
		        .setDescription(`Your account **${getUser[0].username}** successfully unlinked, now you can generate new tokens again for your another discord account!\n\nDon't forget to read [the rules](https://osu.troke.id/doc/rules) and if you need some help, you can contact to our staff! \n\n[Website](https://osu.troke.id/) | [Facebook Group](https://www.facebook.com/groups/osu.datenshi) | [Facebook Page](https://www.facebook.com/gaming/datenshicommunity/) | [YouTube](https://www.youtube.com/channel/UCKwyGpWAD17sVpKwlRDhisw) | [GitHub](https://github.com/osu-datenshi)`)
                .setImage("https://cdn.troke.id/static/logos/datenshi.png")

                message.channel.send(embed);
                let tenshiRole = "818101962859085855";
                let DatenshiGuild = client.guilds.cache.get(client.config.bot.datenshi);
                if(!DatenshiGuild.members.cache.has(getDCid)) 
                await DatenshiGuild.members.fetch(getDCid) 
                DatenshiGuild.member(message.author).roles.remove(tenshiRole)
                await pool.query("UPDATE discord_tokens SET role_id = 0, verified = 0 WHERE userid = ?", [getUser[0].userid]);
            } else {
                message.channel.send("Error: Your account already unlinked!")
            }
        } catch (error) {
            console.log(error);
	        message.channel.send("Where is your token?");
        }
    }
}
