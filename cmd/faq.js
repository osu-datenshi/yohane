const subcommands = {
    help: (embed) => embed
    .setTitle("FAQ Help")
    .setDescription("Full list available bot commands here\n**Common**\n`email` - `banned` - `contact` - `pp` - `koneksi` - `help` - `donate` - `vpn` - `name` - `wipe` - `clan` - `report` - `map` - `role` - `absen` - `link` - `unlink` - `chan`\n**Stats**\n`recent` - @recent (vanilla/relax)\n`top` - @top (vanilla/relax)\n`stats` - @stats (vanilla/relax)")
    .setImage("https://cdn.datenshi.pw/static/logos/datenshi.png"),

    email: (embed) => embed
    .setTitle("Email Verification")
    .setDescription("Theres no email verification!\nAll of you needed its from in-game!\n**After registration, you just need to login into the game and use Datenshi account for the credentials and you are automatically successfull verified!**"),

    chan: (embed) => embed
    .setTitle("Warning!")
    .setDescription("Please consider to look the channels topic!"),

    banned: (embed) => embed
    .setTitle("Banned/Restricted")
    .setDescription("Contact Admin for appeal"),

    contact: (embed) => embed
    .setTitle("Contacting Datenshi's Staff")
    .setDescription("You can contact our staff or make a ticket request if you need help"),

    koneksi: (embed) => embed
    .setTitle("How to Connect Datenshi")
    .setDescription("There is simple guide to how to connect on datenshi")
    .addField("Step 1", "You need to copy osu icon to anywhere as a shortcut")
    .addField("Step 2", "Then right+click on icon that you made, click properties")
    .addField("Step 3", "In properties you will see `Target location`, then you need to add `-devserver datenshi.pw` in last text and click OK")
    .addField("Step 4", "Click that shortcut and try to connect!"),
    
    role: (embed) => embed
    .setTitle("Roles")
    .setDescription("List for all the roles is available on the <#800725905756127252> channels! Make sure you read them carefully!"),

    map: (embed) => embed
    .setTitle("Beatmaps")
    .setDescription("You can directly request your map for ranked from [website](https://osu.datenshi.pw/beatmaps/rank_request), make sure you follow the [rules](https://osu.datenshi.pw/doc/datenshi_beatmap_criteria_en)"),
    
    vpn: (embed) => embed
    .setTitle("VPN Tutorial")
    .setDescription("Tutorial VPN ini berguna bagi orang yang memiliki koneksi lambat saat mendownload beatmap, silahkan [baca ini](https://osu.datenshi.pw/doc/vpn_tutorial)"),

    name: (embed) => embed
    .setTitle("Change name")
    .addField("Can i change name?", "Yes of course, you can change your name for once, but for <@&794911839951388672> they can change for unlimited [on profile settings](https://osu.datenshi.pw/settings/changename), please make a ticket request for change your name")
    .addField("Can i change my clan name?", "Yes of course, you need a <@&794911839951388672> status and then go to [clan settings](https://osu.datenshi.pw/settings/changeclanname) for change your clan name!"),
    
    wipe: (embed) => embed
    .setTitle("Wipe Account")
    .addField("Can i wipe my account?", "You need a <@&794911839951388672> status for wipe your account!"),

    pp: (embed) => embed
    .setTitle("PP Limit")
    .setDescription("For players who don't know about the limiter, please [read the documentations](https://osu.datenshi.pw/doc/13)"),
    
    clan: (embed) => embed
    .setTitle("Clan")
    .addField("How to invite user join to my clan?", "You need to go the clan settings and there are a invite link that you can give it to the users,you can share you invite link to the <#699191360116359229> channel for promoting your clan!")
    .addField("Max clan?", "If you are <@&794911839951388672> your clan max will be increased up to 25, normal is 16 included leader"),
    
    report: (embed) => embed
    .setTitle("Reports")
    .setDescription("Use !report if you from ingame or use channel <#794917984870989836>!"),
    
    link: (embed) => embed
    .setTitle("Link Account")
    .setDescription("How to link your datenshi account with discord? [click here](https://osu.datenshi.pw/discordtokens)"),

    donate: (embed) => embed
    .setTitle("Donate")
    .setDescription("Datenshi are very welcome to user who want support this server, you can go to [donations page](https://datenshi.pw/donations/) for see the perks and price"),

    absen: (embed) => embed
    .setTitle("Absen Jumatan")
    .setDescription("Silahkan buka [link berikut ini](https://docs.google.com/forms/d/e/1FAIpQLScXY6Bv5H-T8KzSKccEazE3peM_wubKoWkZQugMNnvMYFm7Qw/viewform)"),
    
    //# FAQ subcommand template
    //nama: (embed) => embed
    //# code untuk memanipulasi/merubah properti embed taruh disini
}

const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "faq",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: (client, message, args) => {
        if(!args.length || !args[0]) return message.channel.send("This is not a valid option.");
        const subcmd = args.shift()
        const sub = subcommands[subcmd.toLowerCase()]
        if(!sub) return message.channel.send("wrong command, use @faq help") 

        let color = randomcolor_1.randomColor();
        let hex = parseInt(color.replace(/^#/, ''), 16);
        const embed = new Discord.MessageEmbed()
        .setColor(hex);

        sub(embed)

        return message.channel.send(embed)
    }
}
