const fs = require("fs")

const subcommands = {

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    add: (client, message, args) => {
        if(!args.length) return message.channel.send("You forgot to input the badword")

        const msg = args.join(" ")
        global.naughtyWords.push(msg)
        client.config.blacklisted_words = global.naughtyWords
        fs.writeFile('config.json', JSON.stringify(client.config, null, 2), (err) => {
            if(err) throw err
        })
        return message.channel.send(`\`${msg}\` added to the badword list`)
    },

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    remove: (client, message, args) => {
        if(!args.length) return message.channel.send("You forgot to input the badword")

        const msg = args.join(" ")
        global.naughtyWords = global.naughtyWords.filter(e => e !== msg);
        client.config.blacklisted_words = global.naughtyWords;

        fs.writeFile("config.json", JSON.stringify(client.config, null, 2), (err) => {
            if(err) throw err
        })
        return message.channel.send(`Removed ${msg} from blacklist!`)
    }
    
    //# Badword subcommand template
    //nama: (client, message, args) => {
    //# code command
    //}
}

module.exports = {
    name: "nazi",

    /**
     * @param {import("discord.js").Client} client 
     * @param {import("discord.js").Message} message 
     * @param {string[]} args 
     */
    run: (client, message, args) => {
        if(!args.length || !args[0]) return message.channel.send("This is not a valid option.");
        const subcmd = args.shift()
        const sub = subcommands[subcmd]
        if(!sub) return;

        return sub(client, message, args)
    }
}