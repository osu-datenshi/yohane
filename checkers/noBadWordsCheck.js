/**
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Message} message 
 */
module.exports = (client, message) => {
    var messageToCheck = message.content.toLowerCase()
    for (let i = 0; i < global.naughtyWords.length; i++) {
        if (messageToCheck.indexOf(global.naughtyWords[i].toLowerCase()) > -1) {
            return message.delete();
        }
    }
}