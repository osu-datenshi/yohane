const Discord = require("discord.js");
const randomcolor_1 = require("randomcolor");
const { pool } = require("../handlers/databaseHandler");

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
    if(message.channel.id == client.config.bot.beatmapreqch) {
        // don't condone selfcest
        if(message.author.id == client.user.id) return;
        deleteAfter(async function(){
            if(message.author.bot) return;
            let expectedLines = [];
            expectedLines.push(/^Map Name\s?:\s?.+/i);
            expectedLines.push(/^Map Link\s?:\s?https:\/{2}osu\.ppy\.sh\/(s\/\d+|b\/\d+|beatmapsets\/\d+(?:\#(osu|taiko|fruits|mania)\/\d+)?)/i);
            expectedLines.push(/^Status Now\s?:\s?(?:graveyard(?:ed)?|unrank(?:ed)?|loved?)/i);
            expectedLines.push(/^Mode\s?:\s?(?:(?:std|taiko|ctb|mania)(?:\s|,\s?|$))+/i);

            let rejectReason = [];
            let messageLines = message.content.split(/[\r\n]+/g).slice(0,4);
            // reject bad format
            if(expectedLines.some(function(p,i){
              return !p.test(messageLines[i]);
            })) {
                // send error here
                if(messageLines.length > 3 && !expectedLines[3].test(messageLines[3])) rejectReason.push(`Mode yang diberikan tidak valid.`);
                if(messageLines.length > 2 && !expectedLines[2].test(messageLines[2])) rejectReason.push(`Status bukan \`graveyard\`/\`unranked\`/\`loved\`\n  \`${messageLines[2]}\``);
                if(messageLines.length > 1 && !expectedLines[1].test(messageLines[1])) rejectReason.push("Link beatmap tidak valid!");
                if(!expectedLines[0].test(messageLines[0])) rejectReason.push("Format tidak sesuai!");
                sendReplyTimer(
                    "permintaan anda ditolak karena:\n%s".replace("%s",rejectReason.map(function(x){return `- ${x}`;}).join("\n"))
                , 15000);
                return;
            }

            // checker of map data
            let mapResult = expectedLines[1].exec(messageLines[1]);
            let mapString = mapResult[1].split(/[\/\#]/g);
            let bQuery;
            async function q(s,t){
                if(s)
                    return await pool.query('select beatmap_id, difficulty_name, ranked_status_freezed, ranked from beatmaps where beatmapset_id = ?', t);
                else
                    return await pool.query('select beatmap_id, difficulty_name, ranked_status_freezed, ranked from beatmaps where beatmap_id = ?', t);
            }
            let qqqqqq = false;
            switch(mapString[0]){
            case 'b':
                bQuery = await q(false, mapString[1]);
                break;
            case 's':
                bQuery = await q(true, mapString[1]);
                qqqqqq = true;
                break;
            case 'beatmapsets':
                if (mapString.length >= 4)
                    bQuery = await q(false, mapString[3]);
                else
                    bQuery = await q(qqqqqq = true, mapString[1]);
                break;
            }
            // checker only works if there are any results. are we going to put bancho status in here? if yes this can invalidate it too.
            if(bQuery.length) {
                // a datenshi frozen status maps aren't allowed to be requested.
                if(
                    bQuery.some(function(x){return x.ranked_status_freezed;})
                ) {
                    console.error("Detected frozen beatmap request", mapString);
                    sendReplyTimer(`beatmap${qqqqqq ? 'set' : ''} ini tidak dapat request.`, 5000);
                    return;
                }
            }
            // accept the input
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);

            const embed = new Discord.MessageEmbed()
            .setTitle("New Request by " + message.member.displayName)
            .setColor(hex)
            .setDescription(message.content);
            client.channels.cache.get(client.config.bot.bat).send(embed);
        });
    }
}
