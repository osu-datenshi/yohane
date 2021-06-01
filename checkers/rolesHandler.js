const Discord = require("discord.js");

/**
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Message} message 
 */
module.exports = (client, message) => {
    function sendReplyTimer(b, time) {
        message.reply(b)
          .then(function(msg){ setTimeout(function(){msg.delete();},time); });
    }
    function deleteAfter(f){ try { f(); } finally { message.delete(); } }
    if(message.channel.id == client.config.role.getrolesCH) {
        // don't condone selfcest
        if(message.author.id == client.user.id) return;
        deleteAfter(async function(){
            if(message.author.bot) return;
        });
    }
}
