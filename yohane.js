require('events').EventEmitter.prototype._maxListeners = 100;

const config = require("./config.json");
const Discord = require("discord.js");
const Canvas = require('canvas');
const client = new Discord.Client();

const token = config.bot.token;

client.login(token);
global.naughtyWords = config.blacklisted_words;


client.on('ready', () => {
    console.log(`Yohane has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity("DATENSHI", {type: "WATCHING"});
     //client.channels.get(config.bot.general).send(`Yohane has started, with ${client.users.size} users in the Datenshi discord.`)
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.find(ch => ch.name === 'join-user');
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 200);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./welcome.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '25px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to Datenshi', canvas.width / 2.5, canvas.height / 2.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.5);

	ctx.beginPath();
	ctx.arc(140, 140, 200, 0, Math.PI * 2, false);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 100, 25, 150, 150);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(attachment);
});

client.on('message', async message => {
    if (message.content === 'oci') {
        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

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
