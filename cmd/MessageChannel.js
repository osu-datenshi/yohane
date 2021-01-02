const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "breq")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("Beatmap Request Channel")
			.setColor(hex)
			.addField("Information", "This is channel for request your beatmap to be ranked and send directly to our `Beatmap Nominator`!\nWe can make your loved status to be ranked in here!\nMake sure you already read our `Ranking Criteria` before requesting!\nPlease use format below, dont spam and do not request map who already ranked! or we will kick you!")
			.addField("Format", "```\nMap Name :\nMap Link :\nStatus Now:(unranked/loved)\nMode : (std,mania,taiko,ctb)```")
			message.channel.send(embed)
		}
	})
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "r9")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("Roles Request Channel")
			.setColor(hex)
            .addField("Information", "This is channels is closed, we are moving the new system for getting new roles!!")
            .addField("How to Get?", "You can get the roles from [This Page](https://datenshi.xyz/discordtokens), you must login or create the account in the website before generate new token!")
            .addField("Can i Ask?", "No, Just follow easy steps on the website! Enjoy")
			message.channel.send(embed)
		}
	})
	client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "pzp")) {
	    if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.MessageEmbed()
            .setTitle("Welcome To the Player Reporting Channel")
	        .setColor(hex)
            .addField("Information", "Please stick to the format below when reporting and **do not** tag admins here.\nKeep in mind to let the channel clean without any chats beside reporting, and move your ass to #general-en / #general-id to communicate or discuss")
	        .addField("Rules", "- Obviously you should do have Datenshi account.\n- You need to use your valid Datenshi and Discord account before do any kind of reports in this channel.\n- Freely to report any users here, but you need to be as `Little Tenshi` before you do reporting others, also your statement should be VALID and don't be a douchebag here.\n- `Verified Tenshi` and `Streamer` ARE NOT vulnerable and able to get ban after the facts are collected and valid.")
            .addField("Format", "```\nPlayer's username:\nLink to Player's Profile:\nReason for Reporting Player (cheating, multi-accounting):\nEvidence:```")
            message.channel.send(embed)
        }
	})
	client.on("message", async message => {
        if (message.content.startsWith(config.bot.prefix + "tpsbm")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            
            const embed = new Discord.MessageEmbed()
            .setTitle("Submit your Top Play on Datenshi !")
	        .setColor(hex)
            .addField("Information", "This channel is for submitting your best gameplay on Datenshi, we make this because the <@&703503168147030068> is putting random video on `Featured Video` at homepage, so that's why we make this, fuck owner.\nWe are selecting best gameplay and put it on our homepage for 2 weeks.\nPlease follow our rules before submitting\nYour message will auto-delete after submitting, make sure you follow the format")
	        .addField("Rules", "- **ANYONE CAN JOIN!!**\n- Your top play must be on DATENSHI, NOT ANYWHERE!\n- Just send your `.osr` file and upload it or get it on Datenshi website, **DO NOT UPLOAD USING ATTACHMENT DISCORD!!**,\n- Don't use any REPLAY EDITOR! OR WE WILL BANNED YOU!\n- **DONT SPAM!** YOU CAN ONLY SUBMIT 1 YOUR BEST GAMEPLAY!")
            .addField("Format", "```\nUsername:\nLink Replay:\nMap Link:\nMode: (std,taiko,mania,ctb)```")
            message.channel.send(embed)
        }
	})
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "wpscore")) {
			if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("Wipe Account & Delete Score Requests")
			.setColor(hex)
			.addField("Information", "**Please Read before Requests!!**\nThis channel are only for <@&699280489164308541>! You can chose to wipe all your account or select a specific mode or specific score at some beatmap in there! You need to wait after submitting your requests and we need check the scores in database")
			.addField("Format Wipe Account", "```\nUsername :\nMode Wipe : (all mode,std,mania,taiko,ctb)\nMode : (Vanilla/Relax)\nReason : (Reason wipe your account? min 20-characters)```")
			.addField("Format Delete Score", "```\nUsername :\nMap Link : \nScore : (ex. 920.000)\nMode : (std,taiko,mania,ctb)```")
			message.channel.send(embed)
		}
	})
	client.on("message", async message => {
		if (message.content.startsWith(config.bot.prefix + "welkom")) {
		if (message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("DATENSHI REBORN")
			.setColor(hex)
			.addField("Selamat Datang Kembali!", "\nDatenshi adalah server osu private pertama di Indonesia, kini kembali lagi karena banyak yang kangen termasuk saya juga, Datenshi kini dikhususkan untuk Indonesia saja, tidak akan ada lagi player luar yang akan datang kesini, karena sistem registrasi telah diperketat menggunakan Invite Code yang bisa berubah sewaktu-waktu, yuk simak dan baca sampai habis!")
			.addField("Rules", "\n• Dilarang rusuh\n• Dilarang SARA\n• Respect dengan member lainnya\n• Dilarang posting NSFW pada general, silahkan posting pada tempatnya")
			.addField("Links", "\n<:globe_with_meridians:794942554352517130> [Website](https://osu.troke.id)\n<:regional_indicator_f:794942986282205185> [Facebook Group](https://www.facebook.com/groups/osu.datenshi)\n<:heart:794942554352517130> [Donate](https://trakteer.id/osudatenshi)")
			.addField("Butuh Bantuan?", "• Gunakan command `@faq help`\n• Gunakan channel <#698597147553169429>\n• Mention staff <@&794913317322883073> dan <@&794852916305330196>")
			.addField("Invite Code", config.bot.invitecode)
			.setImage("https://cdn.troke.id/static/logos/datenshi.png")
			message.channel.send(embed)
		}
	})
	client.on("message", async message => {
		if(message.content.startsWith(config.bot.prefix + "rls")) {
		if(message.member.id != config.bot.owner_id) { return message.channel.send("This is reserved for ilyt, sorry!") }
			let color = randomcolor_1.randomColor();
			let hex = parseInt(color.replace(/^#/, ''), 16);

			const embed = new Discord.MessageEmbed()
			.setTitle("Ambil Roles!")
			.setColor(hex)
			.setDescription("**Ayo ambil roles kalian!**\n\n• ✅ - Akses ke seluruh channel\n • <:m_mania:705708743865794601> - MANIA\n• <:m_std:705708980562821151> - STD\n• <:m_taiko:705708901068439562> - TAIKO\n• <:m_ctb:705708831497519124> - CTB")
			message.channel.send(embed)
			.then(message => { 
				message.react(config.er.tenshie)
				message.react(config.er.maniae)
				message.react(config.er.stde)
				message.react(config.er.taikoe)
				message.react(config.er.ctbe)
			});
		}
	})
	const welcomeCh = config.bot.welcome;

	client.on("messageReactionAdd", async (reaction, user) => {
		if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
		if (!reaction.message.guild) return;
		if (reaction.message.channel.id === welcomeCh) {
			if (reaction.emoji.name === config.er.tenshie) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(config.er.tenshir)
			}
			if (reaction.emoji.id === config.er.maniae) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(config.er.maniar)
			}
			if (reaction.emoji.id === config.er.stde) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(config.er.stdr)
			}
			if (reaction.emoji.id === config.er.taikoe) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(config.er.taikor)
			}
			if (reaction.emoji.id === config.er.ctbe) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(config.er.ctbr)
			}
		} else {
			return;
		}
	})
	client.on("messageReactionRemove", async (reaction, user) => {
		if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
		if (!reaction.message.guild) return;
		if (reaction.message.channel.id === welcomeCh) {
			if (reaction.emoji.name === config.er.tenshie) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(config.er.tenshir)
			}
			if (reaction.emoji.id === config.er.maniae) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(config.er.maniar)
			}
			if (reaction.emoji.id === config.er.stde) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(config.er.stdr)
			}
			if (reaction.emoji.id === config.er.taikoe) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(config.er.taikor)
			}
			if (reaction.emoji.id === config.er.ctbe) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(config.er.ctbr)
			}
		} else {
			return;
		}
	})
}
