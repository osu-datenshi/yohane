module.exports = {
    name: "messageReactionAdd",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").MessageReaction} reaction 
     * @param {import("discord.js").User} user 
     */
    listen: async (client, reaction, user) => {
        const welcomeCh = client.config.bot.welcome
        if (reaction.message.partial) await reaction.message.fetch();
		if (reaction.partial) await reaction.fetch();
		if (user.bot) return;
		if (!reaction.message.guild) return;
		if (reaction.message.channel.id === welcomeCh) {
			if (reaction.emoji.name === client.config.er.tenshie) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.er.tenshir)
			}
			if (reaction.emoji.id === client.config.er.maniae) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.er.maniar)
			}
			if (reaction.emoji.id === client.config.er.stde) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.er.stdr)
			}
			if (reaction.emoji.id === client.config.er.taikoe) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.er.taikor)
			}
			if (reaction.emoji.id === client.config.er.ctbe) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.er.ctbr)
			}
			if (reaction.emoji.name === "🔞") {
				await reaction.message.guild.members.cache.get(user.id).roles.add("713455119676473445")
			}
			if (reaction.emoji.name === "⚠️") {
				await reaction.message.guild.members.cache.get(user.id).roles.add("763293295949905950")
			}
		} else {
			return;
		}
    }
}