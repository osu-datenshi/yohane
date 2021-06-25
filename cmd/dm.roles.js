const Discord = require('discord.js');
const { pool } = require("../handlers/databaseHandler");

const subcommands = {

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    
    r18: async (client, message, args) => {
        // SILENT EVERYTHING IN HERE
	// R18 FOR EVERYONE!!!!
    const littledemons = new Discord.MessageEmbed()
    .setColor(10181046)
    .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "R18"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        //try {
        //    pool.query('select d.userid, u.country from discord_tokens d left join users_stats u on d.userid = u.id where d.discord_id = ?', [message.author.id], function (er, result, field){
        //        if(!result.length) throw new Error('jmbt'); // not possible to hit this.
        //        if(![].all.call(result,function(x){return x.country == config.bot.negara;})) throw new Error('not eligible'); // not eligible
        //    });
        //} catch (ex) {
        //    return;
        //}
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> R18 Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.mantap_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    osu: async (client, message, args) => {
        
        //if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "osu"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu! Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.osu_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    indonesia: async (client, message, args) => {
        //if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "Indonesia"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Indonesia Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.indonesian_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    international: async (client, message, args) => {
        //if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "International"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> International Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.international_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    vanilla: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "Vanilla"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Vanilla Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.vanilla_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    relax: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "Relaxers"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Relax Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.relax_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    std: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "STD"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!std Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.std_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    taiko: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "TAIKO"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!taiko Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.taiko_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    ctb: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "CTB"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!ctb Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.ctb_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    mania: async (client, message, args) => {
        const littledemons = new Discord.MessageEmbed()
        .setColor(10181046)
        .setDescription("Sorry! You need <@818101962859085855> roles for this, that mean you need to link your osu! Datenshi account with your Discord for get other roles! [please read this](https://osu.troke.id/discortokens)"),

        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send(littledemons).then(msg => msg.delete({timeout: 10000}));
        if (message.member.roles.cache.some(role => (role.name == "MANIA"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!mania Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.mania_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    minecraft: async (client, message, args) => {
        if (message.member.roles.cache.some(role => (role.name == "minecraft"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 10000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Minecraft Added!`).then(msg => msg.delete({timeout: 10000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.minecraft_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    }
}

module.exports = {
    name: "roles",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if (message.channel.id !== client.config.role.getrolesCH) return message.channel.send("Sorry, you need to go `#get-roles` channels only for get the roles!").then(msg => msg.delete({timeout: 3000}));
        if(!args.length || !args[0]) return message.channel.send("This is not a valid option.").then(msg => msg.delete({timeout: 3000}));
        // sudah hilang kawan
        // if (message.author.id){ message.delete({timeout: 5000}) }    
        const subcmd = args.shift()
        const sub = subcommands[subcmd]
        if(!sub) return;

        return sub(client, message, args)
    }
}
