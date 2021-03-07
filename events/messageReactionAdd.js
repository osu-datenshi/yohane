module.exports = {
    name: "messageReactionAdd",

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
		var GetID = reaction.message.guild.members.cache.get(user.id);
		let membersWithRole = reaction.message.member.roles.cache.has("794156543204392961");
		if (reaction.message.channel.id === roleCh) {
			if (reaction.emoji.id === client.config.role.mania_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.role.mania_role)
			}
			if (reaction.emoji.id === client.config.role.std_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.role.std_role)
			}
			if (reaction.emoji.id === client.config.role.taiko_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.role.taiko_role)
			}
			if (reaction.emoji.id === client.config.role.ctb_emoji) {
				await reaction.message.guild.members.cache.get(user.id).roles.add(client.config.role.ctb_role)
			}
			//PERLU DIPERBAIKI NANTI
			if (reaction.emoji.name === "🔞") {
				if (!membersWithRole) {
					await GetID.roles.add(client.config.role.mantap_role)
					console.log(membersWithRole);
				} else {
					GetID.send("You need to be Member!!");
					console.log(membersWithRole);
				}
			}
		} else {
			return;
		}
    }
}