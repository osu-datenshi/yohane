const Discord = require('discord.js');
const randomcolor_1 = require("randomcolor");

module.exports = {
    name: "ipwhitelist",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        if(message.member.id != client.config.bot.owner_id) return message.channel.send("This is reserved for ilyt, sorry!");
		let color = randomcolor_1.randomColor();
		let hex = parseInt(color.replace(/^#/, ''), 16);

		const embed = new Discord.MessageEmbed()
		.setTitle("IP Address Submission")
		.setColor(hex)
		.setDescription("DATENSHI is a strict private server. If you're not from Indonesia :flag_id:, you **may not** be able to register in our server. **It doesn't mean you can't play in this server**. If you really wish so, please submit your IP to our lord fallen angel Yohane in here to get the whitelisted.\n\n:warning: **DO NOT SPAM IN HERE, YOU JUST ONLY CAN SUBMIT 1 IP!** :warning:\n\n**FORMAT EXAMPLE**\n```IP Address : 1.1.1.1\nCountry    : US\nDiscord ID : 12345678910```\n[How to find your IP](https://ip.zxq.co/) | [How to find your Discord ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)\n\n**For Indonesian people**\nUntuk warga Indonesia yang memang tinggal di luar negeri dan ingin register, kalian bisa menggunakan format diatas agar bisa di whitelist.\n\n**When i'm being whitelisted?**\nWe will send you a message in Discord Direct Message if your IP has been whitelisted!")
		message.channel.send(embed)
    }
}