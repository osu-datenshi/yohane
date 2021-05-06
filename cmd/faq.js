const subcommands = {
    help: (embed) => embed
    .setTitle("FAQ Help")
    .setDescription("Full list available bot commands here\n**Common**\n`email` - `banned` - `contact` - `pp` - `koneksi` - `help` - `donate` - `vpn` - `name` - `wipe` - `clan` - `report` - `map` - `role` - `absen` - `link` - `unlink` - `chan`\n**Stats**\n`recent` - @recent (vanilla/relax)\n`top` - @top (vanilla/relax)\n`stats` - @stats (vanilla/relax)")
    .setImage("https://cdn.troke.id/static/logos/datenshi.png"),

    email: (embed) => embed
    .setTitle("Email Verification")
    .setDescription("Tidak ada verifikasi email!\nSemua dilakukan lewat in-game!\n**Kalian cukup in-game setelah melakukan registrasi dan kalian sudah terverifikasi!!**"),

    chan: (embed) => embed
    .setTitle("Warning!")
    .setDescription("Please consider to look the channels topic!"),

    banned: (embed) => embed
    .setTitle("Banned/Restricted")
    .setDescription("Kamu terbanned? Restrict? silahkan [baca ini](https://osu.troke.id/doc/liveplay)"),

    switcher: (embed) => embed
    .setTitle("Switcher")
    .setDescription("[Link Switcher](https://osu.troke.id/switcher)")
    .addField("Kak, Switcher ku kok force close ya?", "Pastikan kamu sudah menjalankannnya menggunakan **run as administrator**")
    .addField("Kak, Switchernya muncul error ketika mau connect", "Tolong kirimkan bukti errornya ke channel <#698597147553169429> agar bisa dibantu mengenai permasalahannya")
    .addField("Kok masih error terus??", "Silahkan gunakan cara manual, ini adalah cara tanpa menggunakan switcher, gunakan [link ini](https://osu.troke.id/doc/install_certificate_and_hosts_manually)"),

    contact: (embed) => embed
    .setTitle("Contacting Datenshi's Staff")
    .setDescription("Jika ingin menghubungi staff, silahkan mention <@&794852916305330196> dan <@&794180047882813440> ! Tolong jangan mention <@&794156391342145586>, untuk bug/report silahkan ke [github](https://github.com/osu-datenshi) kami"),

    koneksi: (embed) => embed
    .setTitle("Cara Connect Datenshi")
    .setDescription("Berikut ini adalah beberapa cara connect Datenshi bagi orang yang belum tau. Dan terdapat berbagai pemecahan masalah umum jika terkendala pada koneksi")
    .addField("__**• Tanpa Switcher (New) •**__", "1. Copy osu! kalian terlebih dahulu\n2. Kemudian Paste as Shortcut\n3. Kemudian klik kanan > properties pada icon osu yang tadi kalian paste\n4. Kemudian pada bagian **Target** kalian cukup tambahkan command ini ```-devserver troke.id``` pada bagian terakhir\n5. Kemudian klik OK lalu jalankan seperti biasa dan login menggunakan akun Datenshi kalian\n6. Enjoy have-fun!")
    .addField("__**• Troubleshooting •**__", "Jika kalian mengalami masalah pada switcher dikondisi tertentu, silahkan menggunakan [cara manual](https://osu.troke.id/doc/install_certificate_and_hosts_manually), cara ini adalah tanpa switcher")
    .setImage("https://cdn.discordapp.com/attachments/699180921969967145/828804274883788872/unknown.png"),
    
    role: (embed) => embed
    .setTitle("Roles")
    .setDescription("<@&794909882724646912>\nRole ini diberikan kepada player yang sudah membuat liveplay bermain osu! dan terbukti tidak menggunakan program illegal, untuk info lebih lanjut silahkan [baca ini](https://osu.troke.id/doc/liveplay).\n\n<@&818101962859085855>\nRole ini harus didapatkan melalui [bot verification](https://osu.troke.id/discordtokens) dan kalian bisa mengakses seluruh channel ini. Ingat! Role ini terhubung dengan Akun Datenshi kalian, pastikan Akun Discord kalian tidak keluar-masuk server Discord Datenshi! untuk menghindari masalah yang ada!\n\n<@&794911839951388672>\nRole ini diberikan jika kalian sudah melakukan donasi, bagi yang berminat silahkan ke halaman [Trakteer](https://trakteer.id/osudatenshi) kami."),

    map: (embed) => embed
    .setTitle("Beatmaps")
    .setDescription("Tolong dibaca! jika kalian ingin map kalian di ranked, kalian harus baca [Ranking Criteria](https://osu.troke.id/index.php?p=16&id=2) terlebih dahulu, Kami tidak mau ngerank map ngawur/aneh disini")
    .addField("**Beatmap sudah disubmit tapi tidak ranked?**", "Segera mention <@&794180047882813440> untuk menanyakan kenapa beatmap yang kamu submit tidak diranked atau pergi ke channel <#796412309802582097> untuk melihat alasan yg diberikan oleh BN")
    .addField("**Cara submit map?**", "[Submit disini](https://osu.troke.id/beatmaps/rank_request)\nJika kalian adalah <@&794911839951388672>, Kalian bisa langsung submit dichannel ini <#727423092397441094>"),
    
    vpn: (embed) => embed
    .setTitle("VPN Tutorial")
    .setDescription("Tutorial VPN ini berguna bagi orang yang memiliki koneksi lambat saat mendownload beatmap, silahkan [baca ini](https://osu.troke.id/doc/vpn_tutorial)"),

    name: (embed) => embed
    .setTitle("Ganti nama")
    .addField("Bisa ganti nama?", "Bisa, untuk user biasa boleh ganti nama 1x saja, sedangkan <@&794911839951388672> bisa ganti sepuasnya [di profile settings](https://osu.troke.id/settings/changename), mention staff untuk changename")
    .addField("Ganti nama clan bisa?", "Ganti nama clan hanya bisa dilakukan oleh leader clan melalui [clan settings](https://osu.troke.id/settings/changeclanname) dan leader clan harus memiliki status <@&794911839951388672>!"),
    
    wipe: (embed) => embed
    .setTitle("Wipe Account")
    .addField("Bisa wipe account?", "User biasa tidak bisa wipe account, wipe account hanya diperbolehkan untuk user <@&794911839951388672>!."),

    pp: (embed) => embed
    .setTitle("PP Limit")
    .setDescription("For players who don't know about the limiter, please [read the documentations](https://osu.troke.id/doc/13)"),
    
    clan: (embed) => embed
    .setTitle("Clan")
    .addField("Cara bikin clan?", "Pembuatan clan bisa dilakukan diwebsite cari Create Clan")
    .addField("Cara invite user / join ke dalam clan?", "Cara invite saat ini adalah menggunakan link invite yang tersedia dibagian clan settings paling bawah (khusus Clan Leader), untuk join tidak bisa harus melalui link invite, gunakan channel <#699191360116359229> untuk mendapatkan link invite atau memposting link invite!")
    .addField("Ganti clan leader?", "Saat ini masih belum bisa ganti clan leader, kemungkinan akan datang dimasa depan!")
    .addField("Berapa max clan?", "Jumlah maximal adalah 16 termasuk leader, jika kalian adalah <@&794911839951388672> bisa request ke admin agar clan max member ditambah menjadi 25"),
    
    report: (embed) => embed
    .setTitle("Reports")
    .addField("Cara report user?", "Gunakan !report untuk in-game atau ke channel <#794917984870989836>!"),
    
    link: (embed) => embed
    .setTitle("Link Account")
    .setDescription("How to link your datenshi account with discord? [click here](https://osu.troke.id/discordtokens)"),

    donate: (embed) => embed
    .setTitle("Donate")
    .addField("Cara donasi?", "Kalian bisa berdonasi melalui `Trakteer` atau `PayPal`")
    .addField("Harga?", "20.500 IDR/bulan")
    .addField("Links", "[`PayPal`](https://paypal.me/ochidarma?locale.x=id_ID)\n[`Trakteer.id`](https://trakteer.id/osudatenshi)")
    .addField("Fiturnya apa aja?", "- Changename unlimited\n- Create Clan\n- Changename Clan (Leader)\n- Background Clan\n- Profile Background (Web)\n- RGB Name (Web)\n- Donat Badges\n- Yellow Username (In-game)\n- Get Access VIP Channel\n- Discord Roles\n- Full Support")
    .addField("Konfirmasi", "**Diharapkan melakukan konfirmasi kepada staff setelah melakukan donasi!**"),

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
