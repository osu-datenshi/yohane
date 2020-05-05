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
                .setImage("https://datenshi.xyz/static/logos/ainu.png")

            if (msg.toLowerCase() == "email") {
                embed.setTitle("Email Verification")
                .addField("**Description**", "Seperti yang dituliskan diverification page sesudah register, Untuk saat ini tidak memerlukan verifikasi lewat email, Kamu cukup memverifikasi dengan cara login kedalam game, Kamu akan otomatis terverifikasi dan bisa mengakses ke web.")
            } else if (msg.toLowerCase() == "appeals") {
                embed.setTitle("Appealing Your Restriction")
                .addField("**Description**", "Datenshi memberikan keringanan dalam unban/restrict, Kamu harus menunggu selama 3 bulan semenjak Banned/Restricted, setelah itu Kamu bisa melakukan appeal kepada Datenshi Staff")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Datenshi's Staff")
                .addField("**Description**", "Datenshi Staff dapat dihubungi melalui Discord atau In-game (jika Online), selama itu kalian bisa menanyai tentang masalah-masalah yang kalian hadapi.")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Datenshi")
                .addField("**Description**", "Ini biasanya terjadi ketika kamu tidak menginstall Cert pada Komputer kamu, Sangat dianjurkan untuk menginstall certificate dari kami, Kamu bisa melihatnya dihalaman #welcome untuk mendapatkan certificate terbaru.")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "Jika Kamu tidak bisa konek dengan switcher, atau terjadi Access Denied, pastikan cek file Hosts kamu, jika file hosts kamu Locked, silahkan unlock terlebih dahulu, lalu delete file hosts nya, setelah itu Kamu harus membuat file hosts baru, download saja file hosts dari sini https://datenshi.xyz/static/hosts.txt")
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Gunakan @faq help untuk melihat command.")
                .addField("Email", "Menjelaskan kenapa kamu tidak menerima email verifikasi.")
                .addField("Appeals", "Menjelaskan tentang cara appeals.")
                .addField("Contact", "Menjelaskan tentang cara menghubungi Datenshi Staff.")
                .addField("Cert", "Menjelaskan kenapa tidak bisa menginstall Certificate.")
                .addField("Hosts", "Menjelaskan kenapa file hosts error.")
                .addField("help", "Menampilkan help")
		.addField("recent", "@recent (vanilla/relax) (nickname)")
		.addField("top", "@top (vanilla/relax) (nickname)")
		.addField("stats", "@stats vanilla/relax (nickname)")

            } else {
                return message.channel.send("command salah, coba @faq help") 
            }
            return message.channel.send(embed)
        }
    })
}
