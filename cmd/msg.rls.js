const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "rls",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if(message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
		let color = randomcolor_1.randomColor();
		let hex = parseInt(color.replace(/^#/, ''), 16);
        //GENERAL_ROLES
		const general_roles = new Discord.MessageEmbed()
		.setAuthor("GENERAL ROLES", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.pw")
		.setColor(hex)
		.setDescription(
            "Welcome to Datenshi, we are strictly the all of channels because of spam protection and filter some weird users to join here, **please read carefully on this roles description!**\n\n<@&794857804548538378> - Our Official Bot, do not make she mad!\n\n<@&706357947747532840> - This roles you can get it by automatically when you boost our Discord Server\n\n<@&794911839951388672> - This roles is for our donators who support this server by donating to our [donation page](https://datenshi.pw/donations/)\n\n<@&836910340230873088> - Our Brand Ambassadors!!!!!\n\n<@&838047192626233414> - Pro Designer\n\n<@&849977055382470696> - Admin Group for osu! server\n\n<@&846338905707773952> - Admin Group for minecraft server\n\n<@&713455119676473445> - Accessing to our secret labs\n\n<@&733836515138076732> - A Group for Giveaway users!\n\n<@&849976528007462922> - Are you Indonesian ? get this!\n\n<@&849976616449081354> - Are you foreigner? get this!")
        .setImage("https://cdn.discordapp.com/attachments/728581754398572546/849979315353026570/GENERAL_ROLES.png")
        //OSU_ROLES
        const osu_roles = new Discord.MessageEmbed()
		.setAuthor("OSU! ROLES", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.pw")
		.setColor(hex)
		.setDescription(
            "In this section, the osu! roles is for the our osu! private server, before you can access the all of <@&849976215355654196> channels you need 1 roles for this, **please read below!!**\n\n<@&794156391342145586> - This is our osu! system maintainers, contact them for any inquiries\n\n<@&794913317322883073> - This group it's managing all of the osu! community section\n\n<@&794852916305330196> - This group is watching your chat in osu!\n\n<@&794180047882813440> - Any problem with beatmap ranking procedure goes to this groups!\n\n<@&799260131430629376> - Carefull, they are watching your osu scores!\n\n<@&818101962859085855> - **You must link** your osu!Datenshi account with your discord account using our bot! [click here](https://osu.datenshi.pw/discordtokens) for the tutorial and **you will have an access to all of the discord channels**\n\n<@&794909882724646912> - This roles it's only for people who already making a liveplay for proofing that they are not using any illegal hacks when playing on Datenshi, [click here](https://osu.datenshi.pw/doc/liveplay) if you want to get this roles")
        .addField("Special Mode", "<@&836435419436154941> - If you are vanilla player, get this!\n<@&763293295949905950> - If you are relax player, get this!")
        .addField("Modes", "<@&705431734526672968> - If you are standard player, get this!\n<@&705431799114760253> - If you are taiko player, get this!\n<@&705431835710062635> - If you are catch the beat player, get this!\n<@&705431631925739631> - If you are maniac player, get this!")
        .setImage("https://cdn.discordapp.com/attachments/728581754398572546/849979308210389002/OSU_ROLES.png")
        //MINECRAFT_ROLES
        const mc_roles = new Discord.MessageEmbed()
		.setAuthor("MINECRAFT ROLES", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.pw")
		.setColor(hex)
		.setDescription(
            "Are you minecraft player???? **READ THIS**\n\n<@&836434045205217290> - Get this roles for access all minecraft channels!\n\n<@&836764459720245258> - Any problem with minecraft server contact this!\n\n<@&846338905707773952> - Contact them for any problem, inquiries or assistance")
        .setImage("https://cdn.discordapp.com/attachments/728581754398572546/849979317621882920/MINECRAFT_ROLES.png")
        //TUTORIAL_GET_ROLES
        const tutor_roles = new Discord.MessageEmbed()
		.setAuthor("HOW TO GET THE ROLES", "https://raw.githubusercontent.com/osu-datenshi/assets/master/logo.png", "https://datenshi.pw")
		.setColor(hex)
		.addField("General Roles", "`r18`, `indonesia`, `international`", true)
        .addField("osu! Roles", "`osu`, `vanilla`, `relax`, `std`, `taiko`, `ctb`, `mania`", true)
        .addField("Minecraft Roles", "`minecraft`", true)
        .addField("Notes", "- All of osu! roles need <@&818101962859085855> roles to be required except `osu`.\n\n- `r18` also needed <@&818101962859085855> or contact to the staff if you want to access that channels, NSFW Channels must be 18 or higher to access them\n\n- Please use `@roles` command on this channels only!")
        .addField("Commands", "Use this command for get the roles, example:\n`@roles minecraft`")
        .setImage("https://cdn.discordapp.com/attachments/728581754398572546/849979318489841674/HOW_TO_GET_ROLES.png")

		message.channel.send(general_roles)
        message.channel.send(osu_roles)
        message.channel.send(mc_roles)
        message.channel.send(tutor_roles)
    }
}
