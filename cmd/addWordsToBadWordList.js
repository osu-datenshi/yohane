const config = require("../config.json");
const fs = require('fs');

module.exports = function(client) {
    client.on('message', async message => {
        //debug id null
        console.log({
            message,
        });
        if (message.content.startsWith(config.bot.prefix + "nazi add")) {
            if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
            // Please make a PR and help me fix this
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "nazi add ");
            console.log(msg)
            msg = msg[1];

            global.naughtyWords.push(msg);
            config.blacklisted_words = global.naughtyWords;
            fs.writeFile('config.json', JSON.stringify(config, null, 2), function(err) {
                if (err) throw err;
            })
            return message.channel.send("Added!")
        }
    })
}
