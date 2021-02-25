module.exports = {
    name: "messageReactionRemove",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").MessageReaction} reaction 
     * @param {import("discord.js").User} user 
     */
    listen: async (client, reaction, user) => {
        const roleCh = client.config.role.getrolesCH
        if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
		if (!reaction.message.guild) return;
		if (reaction.message.channel.id === roleCh) {
			if (reaction.emoji.id === client.config.role.mania_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(client.config.role.mania_role)
			}
			if (reaction.emoji.id === client.config.role.std_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(client.config.role.std_role)
			}
			if (reaction.emoji.id === client.config.role.taiko_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(client.config.role.taiko_role)
			}
			if (reaction.emoji.id === client.config.role.ctb_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.remove(client.config.role.ctb_role)
			}
			if (reaction.emoji.name === "🔞") {
				if(message.member.roles.cache.find(r => r.name === "Members")) {
					await reaction.message.guild.members.cache.get(user.id).roles.remove(client.config.role.mantap_role)
				} else {
					message.author.send("Kamu harus memiliki roles Members untuk mendapatkan ini!")
				}
			}
		} else {
			return;
		}
    }
}