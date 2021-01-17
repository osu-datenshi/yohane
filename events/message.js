module.exports = {
    name: "message",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     */
    listen: (client, message) => {
        if(!message.content.startsWith(client.config.bot.prefix)) return;
        const args = message.content.slice(client.config.bot.prefix.length).trim().split(" ")
        const cmd = args.shift()

        const command = client.commands.get(cmd)
        if(!command) return;
        command.run(client, message, args)
    }
}