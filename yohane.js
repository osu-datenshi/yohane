require('events').EventEmitter.prototype._maxListeners = 100;

const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log(`Yohane has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`); 
    client.user.setActivity("DATENSHI", {type: "WATCHING", url: "https://datenshi.xyz"});
     //client.channels.get(config.bot.general).send(`Yohane has started, with ${client.users.size} users in the Datenshi discord.`)
});

//BUAT TEST
client.on('message', async message => {
    if (message.content === 'crot') {
        //client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
	message.channel.send({files: [ "https://i.kym-cdn.com/photos/images/facebook/001/855/345/2ad.jpg" ] });
    }
});

client.on('message', async message => {
    switch(message.content) {
    case "hello": case "hai": case "hi": case "halo": case "helo":
	message.channel.send(`Hello <@${message.author.id}>!`);
	break;
    };
});

client.on('message', async message => {
    if (message.content.startsWith("@say")) {
      if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
      // Get the channel mention
      if (message.mentions.channels.size == 0) {
          message.reply("please mention a channel first.");
      }
      else {
          let targetChannel = message.mentions.channels.first();
          // Get the message to print

          const args = message.content.split(" ").slice(2);
          let saytext = args.join(" ");
          targetChannel.send(saytext);
          message.delete();
      }
   }
});
//Music
//require("./music/main")(client)
//Admin
require("./administrator/ban.js")(client)
require("./administrator/restrict.js")(client)
//VERIFY
require("./cmd/verifytoken.js")(client)
require("./cmd/getroles.js")(client)
// Check if any naughty words are in the bot.
require("./handlers/noBadWordsCheck")(client)
require("./cmd/addWordsToBadWordList")(client)
require("./cmd/removeWordsFromBadWordList")(client)
// User Stuff
require("./cmd/getUserRecentScore")(client)
require("./cmd/getUserRecentScoreRelax")(client)
require("./cmd/getUserTopScore")(client)
require("./cmd/getUserTopScoreRelax")(client)
require("./cmd/getUserStats")(client)
require("./cmd/getUserStatsRelax")(client)
// Information
require("./cmd/faq")(client)
require("./cmd/serverstats")(client)
// Player Reporting
require("./cmd/pr")(client)
require("./handlers/playerReportingListener")(client)
// Beatmap Request
require("./cmd/bmreq")(client)
require("./handlers/breqhandler")(client)
// Top play submit
require("./cmd/topplay")(client)
require("./handlers/tophandler")(client)
// WIpe requests
require("./cmd/wipereq")(client)
require("./handlers/wiperequest")(client)
