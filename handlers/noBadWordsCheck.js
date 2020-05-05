const config = require("../config.json");

module.exports = function (client) {
    client.on("message", message => {
        var messageToCheck = message.content.toLowerCase();
        if (messageToCheck.startsWith(config.bot.prefix + "nazi remove")) { return require("../cmd/removeWordsFromBadWordList")(client) }
        for (let i = 0; i < global.naughtyWords.length; i++) {
            if (messageToCheck.indexOf(global.naughtyWords[i].toLowerCase()) > -1) {
                return message.delete();
            }
        }
    })
}