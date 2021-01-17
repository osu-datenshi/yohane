const fs = require("fs")

/**
 * @param {import("discord.js").Client} client 
 */
module.exports = (client) => {
    const eventFiles = fs.readdirSync("events/").filter(eventFile => eventFile.endsWith(".js"))

    eventFiles.forEach(eventFile => {
        const event = require(`../events/${eventFile}`)

        client.on(event.name, (...args) => event.listen(client, ...args))
    })
}