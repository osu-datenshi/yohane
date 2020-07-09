const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");
const config = require("../config.json")

module.exports = function (client) {
    client.on("message", message => {
        if (message.content.startsWith(config.bot.prefix + "faq")) {
            var msg = message.content;
            msg = msg.split(config.bot.prefix + "faq ");
            msg = msg[1];
            if (msg === "") { return message.channel.send("This is not a valid option.") }
            if (msg === undefined) { return message.channel.send("This is not a valid option.") }

            let color = randomcolor_1.randomColor();
            let hex = parseInt(color.replace(/^#/, ''), 16);
            const embed = new Discord.RichEmbed()
                .setColor(hex)
            if (msg.toLowerCase() == "email") {
                embed.setTitle("Email Verification")
                .addField("**Description**", "If you new in this server and still waiting email verification, THATS MEAN YOU ARE NOT REALLY READ ON VERIFY PAGE\nWe dont send any verification email for verified your ACCOUNT!\n**YOU JUST NEED TO LOGIN INTO THE GAME AND YOU ARE VERIFIED SUCCESSFULL!!**")
            } else if (msg.toLowerCase() == "banned") {
                embed.setTitle("Banned/Restricted")
                .addField("**Description**", "DAMN BRO, IT'S BECAUSE YOU BREAK THE RULES!, IF YOU BREAK THE RULES YOU ARE BANNED! NO APPEAL, BANNED FOR PERMANENT!")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Datenshi's Staff")
                .addField("**Description**", "Please mention <@&698574331437121550>,<@&702397130601660506> if you need a help!")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Datenshi")
                .addField("**Description**", "You must update your server switcher or try to uninstalling the cert and install by manually, see https://datenshi.xyz/index.php?p=16&id=12")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "You must update your server swithcer or try to remove your hosts file and add it by manually, see https://datenshi.xyz/index.php?p=16&id=12")
	    } else if (msg.toLowerCase() == "verified") {
		embed.setTitle("Verified Tenshi/Little Tenshi")
		.addField("**Description**", "You need to know about these roles! Please Read!\n<@&707312785146773515> This roles is for users who already upload their liveplay for proofing that they dont use any illegal program, users who have this role are totally legit! How to get it? https://datenshi.xyz/doc/liveplay\n<@&707470790169198643> This roles is **only** to get full access our discord channel and not verified your account for new users! You just need to verify your account by login into the game! see <#707471943460323370> for how to get this roles!")
	    } else if (msg.toLowerCase() == "map") {
		embed.setTitle("Beatmaps")
		.addField("**Description**", "Please read, if you want to request your map to be ranked, you must read our Ranking Criteria (https://datenshi.xyz/index.php?p=16&id=2 Indonesian Rules) & (https://datenshi.xyz/index.php?p=16&id=20 English Rules)")
		.addField("**How to request?**", "use this link https://datenshi.xyz/beatmaps/rank_request, if you are <@&699280489164308541> you can directly access our <#727423092397441094> channel")
	    } else if (msg.toLowerCase() == "vpn") {
		embed.setTitle("VPN Tutorial")
		.addField("**Description**", "This tutorial is only for Indonesian People, because **OUR INTERNET CONNECTION IS FUCKING STUPID**, just click link https://datenshi.xyz/doc/vpn_tutorial")
	    } else if (msg.toLowerCase() == "umum") {
		embed.setTitle("Common questions")
		.setDescription("This is common questions")
		.addField("Can i request to changename?", "Yes of course, you can changename for free just 1x, contact our staff for change your name")
		.addField("Can i request wipe account?", "No you cant, this feature support only Donators!.")
		.addField("How to make clan?", "We are currently closed the creating a clan right now, Only Donators can make their Clan!")
		.addField("How to report a user?", "Use !report in-game and use <#727347818267803848> for reports in Discord")
	    } else if (msg.toLowerCase() == "donate") {
		embed.setTitle("Donate")
		.addField("How to donate?", "Donate it's only for Indonesian people, you can acces our donate page in https://trakteer.id/osudatenshi, your donation is helping our server!")
		.addField("How much?", "Rp. 20.000/month")
		.addField("Feature?", "- Changename unlimited\n- Create Clan\n- Changename Clan (Leader)\n- Background Clan\n- Profile Background (Web)\n- RGB Name (Web)\n- Donat Badges\n- Yellow Username (In-game)\n- Get Access VIP Channel\n- Discord Roles\n- Full Support") 
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("This is all of the commands\n`email` - explain why you dont get verified by email\n`banned` - explain why you got banned\n`contact` - how to contact our staff\n`cert` - explain your cert problem\n`hosts` - explain your hosts problem\n`help` - to see all the commands\n`donate` - how to donate?\n`vpn` - solution for indonesian connection shit problem\n`umum` - most common questions\n`map` - explain about the beatmap request\n`verified` - explain the differents roles\n`recent` - @recent (vanilla/relax) ochi\n`top` - @top (vanilla/relax) ochi\n`stats` - @stats (vanilla/relax) ochi")
		.setThumbnail("http://datenshi.xyz/static/logo.png")
            } else {
                return message.channel.send("wrong command, use @faq help") 
            }
            return message.channel.send(embed)
        }
    })
}
