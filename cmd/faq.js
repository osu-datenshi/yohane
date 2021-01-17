const subcommands = {
    help: (embed) => embed
    .setTitle("FAQ Help")
    .setDescription("Berikut ini adalah command yang tersedia pada bot discord\n**Umum**\n`email` - `banned` - `contact` - `koneksi` - `help` - `donate` - `vpn` - `name` - `wipe` - `clan` - `report` - `map` - `roles`\n**Stats**\n`recent` - @recent (vanilla/relax) ochi\n`top` - @top (vanilla/relax) ochi\n`stats` - @stats (vanilla/relax) ochi")
    .setImage("https://cdn.troke.id/static/logos/datenshi.png"),

    email: (embed) => embed
    .setTitle("Email Verification")
    .setDescription("Tidak ada verifikasi email!\nSemua dilakukan lewat in-game!\n**Kalian cukup in-game setelah melakukan registrasi dan kalian sudah terverifikasi!!**"),

    banned: (embed) => embed
    .setTitle("Banned/Restricted")
    .setDescription("Kamu terbanned? Restrict? silahkan [baca ini](https://osu.troke.id/doc/liveplay)"),

    contact: (embed) => embed
    .setTitle("Contacting Datenshi's Staff")
    .setDescription("Jika ingin menghubungi staff, silahkan mention <@&794852916305330196> dan <@&794180047882813440> ! Tolong jangan mention <@&794156391342145586>, untuk bug/report silahkan ke [github](https://github.com/osu-datenshi) kami"),

    koneksi: (embed) => embed
    .setTitle("Cara Connect Datenshi")
    .setDescription("Berikut ini adalah beberapa cara connect Datenshi bagi orang yang belum tau. Dan terdapat berbagai pemecahan masalah umum jika terkendala pada koneksi")
    .addField("__**• Connect Melalui Windows •**__", "1. Pergilah ke [website](https://osu.troke.id/register) untuk mendaftar dan ikuti petunjuk yang ada disana\n2. Kemudian jika sudah sampai proses verifikasi, selanjutnya kalian harus mengunduh [switcher](https://osu.troke.id/switcher)\n3. Buka `switcher.zip` dan extract ke desktop lalu buka `run as administrator`\n4. Setelah dibuka switchernya kalian harus memilih servernya lalu pilih `Datenshi` dan klik `Connect` tunggu hingga beberapa detik hingga ada tulisan `You are connected to Datenshi`\n5.Enjoy have fun!")
    .addField("__**• Connect Melalui Linux/Mac •**__", "*Disini kami memastikan osu kalian sudah ready di Linux, jadi untuk masalah installasi kalian bisa googling sendiri\n\n1. Silahkan edit file `/etc/hosts` kalian lalu copy paste hosts ini :\n```139.180.145.85 c.ppy.sh ce.ppy.sh c3.ppy.sh c4.ppy.sh c5.ppy.sh c6.ppy.sh a.ppy.sh i.ppy.sh osu.ppy.sh```\n2. Ctrl+X + Y + Enter\n3. Download certificate `wget https://cdn.troke.id/dt.cer`\n4. Buka settingan Internet Explorer dengan menggunakan `wine control`\n5. Double klik pada Internet Settings > Content > Ceritifcates\n6. Pilih **Import** lalu Next > klik Browse cari certificate yang sudah di download lalu Next\n7. Pilih Place all certificates in the following store dan klik Browse\n8. Klik **Trusted Root Certification Authorities** lalu OK > Next > Finish")
    .addField("__**• Troubleshooting •**__", "Jika kalian mengalami masalah pada switcher dikondisi tertentu, silahkan menggunakan [cara manual](https://osu.troke.id/doc/install_certificate_and_hosts_manually), cara ini adalah tanpa switcher"),
    
    role: (embed) => embed
    .setTitle("Verified Tenshi")
    .setDescription("<@&794909882724646912>\nRole ini diberikan kepada player yang sudah membuat liveplay bermain osu! dan terbukti tidak menggunakan program illegal, untuk info lebih lanjut silahkan [baca ini](https://osu.troke.id/doc/liveplay)"),

    map: (embed) => embed
    .setTitle("Beatmaps")
    .setDescription("Tolong dibaca! jika kalian ingin map kalian di ranked, kalian harus baca [Ranking Criteria](https://osu.troke.id/index.php?p=16&id=2) terlebih dahulu, Kami tidak mau ngerank map ngawur/aneh disini")
    .addField("**Beatmap sudah disubmit tapi tidak ranked?**", "Segera mention <@&794180047882813440> untuk menanyakan kenapa beatmap yang kamu submit tidak diranked")
    .addField("**Cara submit map?**", "[Submit disini](https://osu.troke.id/beatmaps/rank_request)\nJika kalian adalah <@&794911839951388672>, Kalian bisa langsung submit dichannel ini <#727423092397441094>"),
    
    vpn: (embed) => embed
    .setTitle("VPN Tutorial")
    .setDescription("Tutorial VPN ini berguna bagi orang yang memiliki koneksi lambat saat mendownload beatmap, silahkan [baca ini](https://osu.troke.id/doc/vpn_tutorial)"),

    name: (embed) => embed
    .setTitle("Ganti nama")
    .addField("Bisa ganti nama?", "Bisa, untuk user biasa boleh ganti nama 1x saja, sedangkan <@&794911839951388672> unlimited change name, mention staff untuk changename"),
    
    wipe: (embed) => embed
    .setTitle("Wipe Account")
    .addField("Bisa wipe account?", "User biasa tidak bisa wipe account, wipe account hanya diperbolehkan untuk user <@&794911839951388672>!."),
    
    clan: (embed) => embed
    .setTitle("Clan")
    .addField("Cara bikin clan?", "Pembuatan clan bisa dilakukan diwebsite cari Create Clan")
    .addField("Cara invite user / join ke dalam clan?", "Cara invite saat ini adalah menggunakan link invite yang tersedia dibagian clan settings paling bawah (khusus Clan Leader), untuk join tidak bisa harus melalui link invite, gunakan channel <#699191360116359229> untuk mendapatkan link invite atau memposting link invite!")
    .addField("Ganti clan leader?", "Saat ini masih belum bisa ganti clan leader, kemungkinan akan datang dimasa depan!"),
    
    report: (embed) => embed
    .setTitle("Reports")
    .addField("Cara report user?", "Gunakan !report untuk in-game atau ke channel <#794917984870989836>!"),
    
    donate: (embed) => embed
    .setTitle("Donate")
	.addField("Cara donasi?", "Kalian bisa berdonasi melalui `Trakteer` atau `PayPal`")
    .addField("Harga?", "20.000 IDR/bulan")
    .addField("Links", "[`PayPal`](https://paypal.me/ochidarma?locale.x=id_ID)\n[`Trakteer.id`](https://trakteer.id/osudatenshi)")
    .addField("Fiturnya apa aja?", "- Changename unlimited\n- Create Clan\n- Changename Clan (Leader)\n- Background Clan\n- Profile Background (Web)\n- RGB Name (Web)\n- Donat Badges\n- Yellow Username (In-game)\n- Get Access VIP Channel\n- Discord Roles\n- Full Support")
    
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
        const sub = subcommands[subcmd]
        if(!sub) return message.channel.send("wrong command, use @faq help") 

        let color = randomcolor_1.randomColor();
        let hex = parseInt(color.replace(/^#/, ''), 16);
        const embed = new Discord.MessageEmbed()
        .setColor(hex);

        sub(embed)

        return message.channel.send(embed)
    }
}