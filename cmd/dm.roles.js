const Discord = require('discord.js');

const subcommands = {

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    r18: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "R18"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> R18 Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.mantap_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    vanilla: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "Vanilla"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Vanilla Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.vanilla_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    relax: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "Relaxers"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Relax Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.relax_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    std: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "STD"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!std Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.std_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    taiko: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "TAIKO"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!taiko Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.taiko_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    ctb: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "CTB"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!ctb Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.ctb_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    mania: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Little Demons"))) return message.channel.send("Sorry, you need Little Demons roles before get this roles!").then(msg => msg.delete({timeout: 5000}));
        if (message.member.roles.cache.some(role => (role.name == "MANIA"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> osu!mania Added!`).then(msg => msg.delete({timeout: 5000}));
            message.guild.members.cache.get(getDCid).roles.add(client.config.role.mania_role)
        } catch (ex) {
            message.channel.send("Error!");
        }
    },

    minecraft: async (client, message, args) => {
        if (message.member.roles.cache.some(role => (role.name == "Minecraft"))) return message.channel.send("Sorry, you already have this roles!").then(msg => msg.delete({timeout: 5000}));
        try {
            var getDCid = message.author.id;
            message.channel.send(`<@${getDCid}> Minecraft Added!`).then(msg => msg.delete({timeout: 5000}));
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
        if(!args.length || !args[0]) return message.channel.send("This is not a valid option.");
        if (message.author.id){ message.delete({timeout: 5000}) }
        const subcmd = args.shift()
        const sub = subcommands[subcmd]
        if(!sub) return;

        return sub(client, message, args)
    }
}
