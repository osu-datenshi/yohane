module.exports = {
    name: "ready",

    /**
     * @param {import("discord.js").Client} client 
     */
    listen: (client) => {
        console.log(`Yohane has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
        client.user.setActivity("DATENSHI", {type: "WATCHING", url: "https://datenshi.xyz"});
        require("../handlers/serverStatsHandler")(client)
    }
}