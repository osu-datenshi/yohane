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
            const embed = new Discord.MessageEmbed()
                .setColor(hex)
            if (msg.toLowerCase() == "email") {
                embed.setTitle("Email Verification")
                embed.setDescription("If you new in this server and still waiting email verification\nWe dont send any verification email for verified your ACCOUNT!\n**YOU JUST NEED TO LOGIN INTO THE GAME AND YOU ARE VERIFIED SUCCESSFULL!!**")
            } else if (msg.toLowerCase() == "banned") {
                embed.setTitle("Banned/Restricted")
                embed.setDescription("Are you got banned or Restricted? Please Read Our Rules, and if you want to appeal, read [this](https://datenshi.xyz/doc/liveplay)")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Datenshi's Staff")
                embed.setDescription("Please mention <@&698574331437121550>,<@&702397130601660506> if you need a help!")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Datenshi")
                embed.setDescription("You must update your server switcher or try to uninstalling the cert and install by manually, see [doc](https://datenshi.xyz/index.php?p=16&id=12)")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                embed.setDescription("You must update your server swithcer or try to remove your hosts file and add it by manually, see [doc](https://datenshi.xyz/index.php?p=16&id=12)")
	    } else if (msg.toLowerCase() == "roles") {
	        embed.setTitle("Verified Tenshi/Little Tenshi")
	        embed.setDescription("You need to know about these roles! Please Read!\n\n<@&707312785146773515>\nThis roles is for users who already upload their liveplay for proofing that they dont use any illegal program, users who have this role are totally legit! How to get it? [Click here](https://datenshi.xyz/doc/liveplay)\n\n<@&707470790169198643>\nThis roles is **only** to get full access our discord channel!! see <#742317817528844308> for how to get this roles!")
	    } else if (msg.toLowerCase() == "map") {
	        embed.setTitle("Beatmaps")
	        embed.setDescription("Please read, if you want to request your map to be ranked, you must read our Ranking Criteria [Indonesian Rules](https://datenshi.xyz/index.php?p=16&id=2) & [English Rules](https://datenshi.xyz/index.php?p=16&id=20)")
		.addField("**How to request?**", "[Submit Your Map Here](https://datenshi.xyz/beatmaps/rank_request)\nif you are <@&699280489164308541> you can directly access our <#727423092397441094> channel")
	    } else if (msg.toLowerCase() == "vpn") {
		embed.setTitle("VPN Tutorial")
		embed.setDescription("This tutorial is only for Indonesian People, because **OUR INTERNET CONNECTION IS FUCKING STUPID**, just click link https://datenshi.xyz/doc/vpn_tutorial")
	    } else if (msg.toLowerCase() == "name") {
	        embed.setTitle("Change Name")
                .addField("Can i request to changename?", "Yes of course, you can change your name for free just 1x, contact our staff for change your name")
            } else if (msg.toLowerCase() == "wipe") {
                embed.setTitle("Wipe Account")
                .addField("Can i request wipe account?", "No you can't, this feature only for <@&699280489164308541>!.")
            } else if (msg.toLowerCase() == "clan") {
                embed.setTitle("Clan")
                .addField("How to make clan?", "We are currently disabled the creating clan right now, Only <@&699280489164308541> can make their Clan!")
                .addField("How to invite users?", "If you are leader clan, go to clans settings and copy your invite link and send them to your friends, if you are not, just ask the leader, also you can go to <#699191360116359229> for view listing of invite links")
                .addField("How to change leader?", "Probably you can't change leader, we are planning to make this feature coming in the future!")
            } else if (msg.toLowerCase() == "report") {
                embed.setTitle("Reports")
		.addField("How to report a user?", "Use !report in-game or go to <#727347818267803848> for reports from Discord")
	    } else if (msg.toLowerCase() == "donate") {
	        embed.setTitle("Donate")
	        .addField("How to donate?", "You can donate by using `Indonesian Local Payment` or `PayPal`")
                .addField("How much?", "20.000 IDR/month\n$ 1.36/month")
                .addField("Links", "[`PayPal`](https://paypal.me/ochidarma?locale.x=id_ID)\n[`Trakteer.id`](https://trakteer.id/osudatenshi)")
	        .addField("Feature?", "- Changename unlimited\n- Create Clan\n- Changename Clan (Leader)\n- Background Clan\n- Profile Background (Web)\n- RGB Name (Web)\n- Donat Badges\n- Yellow Username (In-game)\n- Get Access VIP Channel\n- Discord Roles\n- Full Support") 
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Welcome to Datenshi! <a:emoji_name:emoji_id>\nPlease read our [Rules](https://datenshi.xyz/doc/rules)\nThis is list all of the commands\n\n`email` - explain why you dont get verified by email\n`banned` - explain why you got banned\n`contact` - how to contact our staff\n`cert` - explain your cert problem\n`hosts` - explain your hosts problem\n`help` - to see all the commands\n`donate` - how to donate?\n`vpn` - solution for indonesian connection shit problem\n`name` - changename?\n`wipe` - wipeaccount?\n`clan` - about clans\n`report` - explain how to reports\n`map` - explain about the beatmap request\n`roles` - explain the differents roles\n`recent` - @recent (vanilla/relax) ochi\n`top` - @top (vanilla/relax) ochi\n`stats` - @stats (vanilla/relax) ochi")
		.setImage("https://i.datenshi.xyz/static/logos/datenshi.png")
            } else {
                return message.channel.send("wrong command, use @faq help") 
            }
            return message.channel.send(embed)
        }
    })
}
