const fs = require("fs")

/**
 * @param {import("discord.js").Client} client 
 */
module.exports = (client) => {
    const commandFiles = fs.readdirSync("cmd/").filter(commandFile => commandFile.endsWith(".js"))

    commandFiles.forEach(commandFile => {
        const command = require(`../cmd/${commandFile}`)
        client.commands.set(command.name, command)
    })
}