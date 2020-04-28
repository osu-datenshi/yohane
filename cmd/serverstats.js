const Discord = require('discord.js');
const config = require("../config.json")
const redis = require('redis');
var rclient = redis.createClient({
    host: (config.redisserver.host),
    port: 6379,
    auth_pass: (config.redisserver.password)
});

module.exports = function (client) {

    client.on('error', function (err) {
        console.log('Error ' + err);
    });

    console.log('Connection is establishing now...');
    client.on('message', async message => {
        // Get our stats channels ID
        const totalOnlineChannel = client.channels.get(config.bot.totalonlinech);
        const totalRegisterChannel = client.channels.get(config.bot.totalregisterch);
        const totalPpChannel = client.channels.get(config.bot.totalppch);
        const totalPlayChannel = client.channels.get(config.bot.totalplaych);
        // Updating stats every 30 seconds
        setInterval(function () {
            console.log('Getting stats update..');
            rclient.get('ripple:online_users', (err, reply) => {
                totalOnlineChannel.setName(`In-Game Online: ${reply}`)
                    .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
                    .catch(err => console.log(err));
            });

            rclient.get('ripple:registered_users', (err, reply) => {
                totalRegisterChannel.setName(`Registered: ${reply}`)
                    .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
                    .catch(err => console.log(err));
            });

            rclient.get('ripple:total_pp', (err, reply) => {
                totalPpChannel.setName(`Total PP: ${reply}`)
                    .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
                    .catch(err => console.log(err));
            });

            rclient.get('ripple:total_plays', (err, reply) => {
                totalPlayChannel.setName(`Total Plays: ${reply}`)
                    .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
                    .catch(err => console.log(err));
            });
        }, 300000)
    });
}


