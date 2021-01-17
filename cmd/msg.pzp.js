const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "pzp",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
        let color = randomcolor_1.randomColor();
        let hex = parseInt(color.replace(/^#/, ''), 16);
            
        const embed = new Discord.MessageEmbed()
        .setTitle("Welcome To the Player Reporting Channel")
	    .setColor(hex)
        .addField("Information", "Tolong ikuti format ketika melaporkan dan **jangan** tag admin disini.\nBiarkan channel ini tetap bersih dari chat sampah selain report, silahkan chat disini <#698577379500621947> untuk diskusi yang lain dan <#698597147553169429> untuk masalah teknis\n**INGAT DIBACA!!**")
	    .addField("Rules", "- Harus memiliki akun Datenshi.\n- Kamu harus menggunakan akun Datenshi dan Discord yang sesuai sebelum melaporkan sesuatu.\n- Silahkan lapor user YANG MENURUT KALIAN MENCURIGAKAN disini.\n- Lapor dengan jelas dan padat (Reasonable)")
        .addField("Format", "```\nPlayer username:\nLink Profile:\nAlasan (cheating, multi-accounting):\nBukti:```")
        message.channel.send(embed)
    }
}