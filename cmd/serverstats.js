const Discord = require('discord.js');
const redis = require('redis');
var rclient = redis.createClient({
    host: 'datenshi.xyz',
    port: 6379,
    no_ready_check: true,
    auth_pass: ''
});

module.exports = function (client) {

    client.on('error', function (err) {
        console.log('Error ' + err);
    });

    console.log('Connection is establishing now...');
    client.on('message', async message => {
        // Get our stats channels ID
        const totalOnlineChannel = client.channels.get('704518817883226133');
        const totalScoresChannel = client.channels.get('704518891820286010');
        const totalPpChannel = client.channels.get('704519257601343528');
        const totalPlayChannel = client.channels.get('704519323087273995');
        // Updating stats every 30 seconds
        setInterval(function () {
            console.log('Getting stats update..');
            rclient.get('ripple:online_users', (err, reply) => {
                totalOnlineChannel.setName(`In-Game Online: ${reply}`)
                    .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
                    .catch(err => console.log(err));
            });

            rclient.get('ripple:registered_users', (err, reply) => {
                totalScoresChannel.setName(`Registered: ${reply}`)
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
        }, 30000)
    });
}


