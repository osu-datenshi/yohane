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
                .addField("**Description**", "Seperti yang dituliskan diverification page sesudah register, Untuk saat ini tidak memerlukan verifikasi lewat email, Kamu cukup memverifikasi dengan cara login kedalam game, Kamu akan otomatis terverifikasi dan bisa mengakses ke web.")
            } else if (msg.toLowerCase() == "banned") {
                embed.setTitle("Banned/Restricted")
                .addField("**Description**", "Datenshi tidak memberikan ampun kepada siapapun yang terbukti melanggar peraturan, jika terbukti melanggar, kami tidak akan segan menghapus account yg bersangkutan secara terus-menerus atau banned IP")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Datenshi's Staff")
                .addField("**Description**", "Datenshi Staff dapat dihubungi melalui Discord atau In-game (jika Online), selama itu kalian bisa menanyai tentang masalah-masalah yang kalian hadapi.")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Datenshi")
                .addField("**Description**", "Ini biasanya terjadi ketika kamu tidak menginstall Cert pada Komputer kamu, Sangat dianjurkan untuk menginstall certificate dari kami, Kamu bisa melihatnya dihalaman #welcome untuk mendapatkan certificate terbaru.")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                .addField("**Description**", "Jika Kamu tidak bisa konek dengan switcher, atau terjadi Access Denied, pastikan cek file Hosts kamu, jika file hosts kamu Locked, silahkan unlock terlebih dahulu, lalu delete file hosts nya, setelah itu Kamu harus membuat file hosts baru, download saja file hosts dari sini https://i.datenshi.xyz/static/hosts.txt")
	    } else if (msg.toLowerCase() == "verified") {
		embed.setTitle("Verified Tenshi/Little Tenshi")
		.addField("**Description**", "Perlu diketahui **Verified Tenshi** dan **Little Tenshi** sangat berbeda, **Verified Tenshi** dikhususkan bagi player yang sudah memberikan liveplay nya kepada Datenshi Staff dan dinyatakan sebagai player legit / tidak menggunakan illegal program, sedangkan **Little Tenshi** hanya berlaku pada discord yang dikhususkan untuk memfilter orang-orang yg masuk ke dalam discord agar mencegah orang-orang aneh masuk")
		.addField("**Cara Mendapatkan Little Tenshi**", "Untuk verifikasi **Little Tenshi** dengan cara mengunjungi #verified channel lalu mengikuti format yang berlaku `#verified linkprofile` (Link profile harus akun **Datenshi** !) ")
		.addField("**Cara Mendapatkan Verified Tenshi**", "Untuk mendapatkan **Verified Tenshi** kunjungi link https://bit.ly/3fpw3W8")
	    } else if (msg.toLowerCase() == "map") {
		embed.setTitle("Beatmaps")
		.addField("**Description**", "Tolong bagi yang request map, harap mengikuti peraturan Ranking Criteria yang sudah dibuat ya! Link https://datenshi.xyz/doc/2")
		.addField("**Cara Request Maps?**", "Pakai ini https://datenshi.xyz/beatmaps/rank_request")
		.addField("**Cara Download Beatmap?**", "Download Beatmap bisa melalui web osu! atau https://bloodcat.com/osu")
	    } else if (msg.toLowerCase() == "vpn") {
		embed.setTitle("VPN Tutorial")
		.addField("**Description**", "VPN Tutorial bagi pengguna yang mengalami masalah akses lambat ke osu! offical atau Datenshi, klik link https://datenshi.xyz/doc/vpn_tutorial")
	    } else if (msg.toLowerCase() == "umum") {
		embed.setTitle("Pertanyaan Umum")
		.setDescription("Berikut adalah pertanyaan umum dan solusinya")
		.addField("Apakah bisa request changename?", "Bisa, tapi dengan syarat 1x saja, kontak Staff untuk mengganti nama")
		.addField("Apakah bisa wipe account?", "Sayang sekali, wipe account untuk donatur saja, Wipe account bisa juga ketika dalam kondisi tertentu seperti score erorr dan sebagainya.")
		.addField("Cara bikin clan?", "Untuk saat ini pembuatan clan hanya dilakukan oleh donatur saja, akan dibuka untuk umum bila pada waktunya diumumkan kembali lewat announcement")
		.addField("Cara report akun gimana?", "Gunakan !report namaakun reason lewat in-game, bisa dilakukan via Discord dengan cara kontak Admin melalui PM")
	    } else if (msg.toLowerCase() == "donate") {
		embed.setTitle("Donate")
		.addField("Bagaimana cara donasi?", "silahkan menuju link https://trakteer.id/osudatenshi, hasil donasi akan sepenuhnya dipakai untuk biaya server")
		.addField("Harga berapa?", "Rp. 20.000/bulan")
		.addField("Keuntungan Donasi?", "Changename unlimited, Create Clan, Changename Clan (Leader), Background Clan, Profile Background (Web), RGB Name (Web), Donat Badges, Verified Tenshi Badges, Yellow Username (In-game), Get Access #request-cepat, Discord Roles, Request Wipe Account, Full Support") 
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Gunakan @faq help untuk melihat command.")
                .addField("Email", "Menjelaskan kenapa kamu tidak menerima email verifikasi.")
                .addField("Banned", "Menjelaskan tentang cara appeals.")
                .addField("Contact", "Menjelaskan tentang cara menghubungi Datenshi Staff.")
                .addField("Cert", "Menjelaskan kenapa tidak bisa menginstall Certificate.")
                .addField("Hosts", "Menjelaskan kenapa file hosts error.")
                .addField("help", "Menampilkan help")
		.addField("donate", "Cara donasi")
		.addField("vpn", "menampilkan tutorial vpn")
		.addField("umum", "menampilkan pertanyaan umum")
		.addField("map", "menampilkan beatmap help")
		.addField("verified", "cara verified dan perbedaannya")
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
