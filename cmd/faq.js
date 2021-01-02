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
                embed.setDescription("Tidak ada verifikasi email!\nSemua dilakukan lewat in-game!\n**Kalian cukup in-game setelah melakukan registrasi dan kalian sudah terverifikasi!!**")
            } else if (msg.toLowerCase() == "banned") {
                embed.setTitle("Banned/Restricted")
                embed.setDescription("Kamu terbanned? Restrict? silahkan [baca ini](https://osu.troke.id/doc/liveplay)")
            } else if (msg.toLowerCase() == "contact") {
                embed.setTitle("Contacting Datenshi's Staff")
                embed.setDescription("Jika ingin menghubungi staff, silahkan mention <@&794852916305330196> dan <@&794180047882813440> ! Tolong jangan mention <@&794156391342145586>, untuk bug/report silahkan ke [github](https://github.com/osu-datenshi) kami")
            } else if (msg.toLowerCase() == "cert") {
                embed.setTitle("'Connection failed. Retrying in 30s' while connecting to Datenshi")
                embed.setDescription("Mendapati masalah pada certificate error? silahkan [baca ini](https://osu.troke.id/index.php?p=16&id=12)")
            } else if (msg.toLowerCase() == "hosts") {
                embed.setTitle("Hosts File Error")
                embed.setDescription("Mendapati masalah pada file hosts ? silahkan [baca ini](https://osu.troke.id/index.php?p=16&id=12)")
	        } else if (msg.toLowerCase() == "role") {
	            embed.setTitle("Verified Tenshi")
	            embed.setDescription("<@&794909882724646912>\nRole ini diberikan kepada player yang sudah membuat liveplay bermain osu! dan terbukti tidak menggunakan program illegal, untuk info lebih lanjut silahkan [baca ini](https://osu.troke.id/doc/liveplay)")
	        } else if (msg.toLowerCase() == "map") {
	            embed.setTitle("Beatmaps")
	            embed.setDescription("Tolong dibaca! jika kalian ingin map kalian di ranked, kalian harus baca [Ranking Criteria](https://datenshi.xyz/index.php?p=16&id=2) terlebih dahulu, Kami tidak mau ngerank map ngawur/aneh disini")
		        .addField("**Cara Submit Map?**", "[Submit disini](https://osu.troke.id/beatmaps/rank_request)\nJika kalian adalah <@&794911839951388672>, Kalian bisa langsung submit dichannel ini <#727423092397441094>")
	        } else if (msg.toLowerCase() == "vpn") {
		        embed.setTitle("VPN Tutorial")
		        embed.setDescription("Tutorial VPN ini berguna bagi orang yang memiliki koneksi lambat saat mendownload beatmap, silahkan [baca ini](https://osu.troke.id/doc/vpn_tutorial)")
	        } else if (msg.toLowerCase() == "name") {
	            embed.setTitle("Ganti nama")
                .addField("Bisa ganti nama?", "Bisa, untuk user biasa boleh ganti nama 1x saja, sedangkan <@&794911839951388672> unlimited change name")
            } else if (msg.toLowerCase() == "wipe") {
                embed.setTitle("Wipe Account")
                .addField("Bisa wipe account?", "User biasa tidak bisa wipe account, wipe account hanya diperbolehkan untuk user <@&794911839951388672>!.")
            } else if (msg.toLowerCase() == "clan") {
                embed.setTitle("Clan")
                .addField("Cara bikin clan?", "Pembuatan Clan saat ini disable, khusus user <@&794911839951388672> yang dapat membuat clan!")
                .addField("Cara invite user / join ke dalam clan?", "Cara invite saat ini adalah menggunakan link invite yang tersedia dibagian clan settings paling bawah (khusus Clan Leader), untuk join tidak bisa harus melalui link invite, gunakan channel <#699191360116359229> untuk mendapatkan link invite atau memposting link invite!")
                .addField("Ganti clan leader?", "Saat ini masih belum bisa ganti clan leader, kemungkinan akan datang dimasa depan!")
            } else if (msg.toLowerCase() == "report") {
                embed.setTitle("Reports")
		        .addField("Cara report user?", "Gunakan !report untuk in-game atau ke channel <#794917984870989836>!")
	        } else if (msg.toLowerCase() == "donate") {
	            embed.setTitle("Donate")
	            .addField("Cara donasi?", "Kalian bisa berdonasi melalui `Trakteer` atau `PayPal`")
                .addField("Harga?", "20.000 IDR/bulan")
                .addField("Links", "[`PayPal`](https://paypal.me/ochidarma?locale.x=id_ID)\n[`Trakteer.id`](https://trakteer.id/osudatenshi)")
	            .addField("Fiturnya apa aja?", "- Changename unlimited\n- Create Clan\n- Changename Clan (Leader)\n- Background Clan\n- Profile Background (Web)\n- RGB Name (Web)\n- Donat Badges\n- Yellow Username (In-game)\n- Get Access VIP Channel\n- Discord Roles\n- Full Support") 
            } else if (msg.toLowerCase() == "help") {
                embed.setTitle("FAQ Help")
                .setDescription("Berikut ini adalah command yang tersedia pada bot discord\n**Umum**\n`email` - `banned` - `contact` - `cert` - `hosts` - `help` - `donate` - `vpn` - `name` - `wipe` - `clan` - `report` - `map` - `roles`\n**Stats**\n`recent` - @recent (vanilla/relax) ochi\n`top` - @top (vanilla/relax) ochi\n`stats` - @stats (vanilla/relax) ochi")
		        .setImage("https://cdn.troke.id/static/logos/datenshi.png")
            } else {
                return message.channel.send("wrong command, use @faq help") 
            }
            return message.channel.send(embed)
        }
    })
}
