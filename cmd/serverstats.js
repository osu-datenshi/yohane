const Discord = require('discord.js');
const redis = require('redis');
var rclient = redis.createClient({
    host: 'datenshi.xyz',
    port: 6379,
    no_ready_check: true,
    auth_pass: 'd@tenshi12'
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
            console.log('Getting stats update..')

            let totalOnlineRedis;
            let totalScoresRedis;
            let totalPpRedis;
            let totalPlayRedis;

            totalOnlineRedis = rclient.get('ripple:online_users', redis.print);
            totalScoresRedis = rclient.get('ripple:submitted_scores', redis.print);
            totalPpRedis = rclient.get('ripple:total_pp', redis.print);
            totalPlayRedis = rclient.get('ripple:total_plays', redis.print);

            totalOnlineChannel.setName(`total online: ${totalOnlineRedis}`)
            .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
            .catch(err=>console.log(err));

            totalScoresChannel.setName(`total scores: ${totalScoresRedis}`)
            .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
            .catch(err=>console.log(err));

            totalPpChannel.setName(`total totalpp: ${totalPpRedis}`)
            .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
            .catch(err=>console.log(err));

            totalPlayChannel.setName(`total totalpp: ${totalPlayRedis}`)
            .then(newChannel => console.log(`stat channel renamed to: ${newChannel.name}`))
            .catch(err=>console.log(err));
        }, 30000)
    });
}


