const fetch = require('node-fetch');

module.exports = {
    name: "unrestrict",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.roles.cache.some(role => (role.name == "Community Manager" || role.name === "Moderator"))) return message.channel.send("This is reserved for ilyt, sorry!");
        const msg = args.join(" ")
        if (msg.length == 0 || msg === "") return message.channel.send("Error.");
        var user = await fetch(`${config.bot.domain}/api/v1/fokabotMessage?k=${config.bot.banchokey}&to=%23admin&msg=!unrestrict+${msg}`).then(response => response.json());
        message.channel.send("Your commando has been succesfully execute!")
    }
}