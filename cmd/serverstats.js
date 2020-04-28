const Discord = require('discord.js');
const client = new Discord.Client();
var rclient = require('redis').createClient({
      host : 'localhost',
      port : 6379,
      no_ready_check: true,
      auth_pass: ''
});

client.on('error', function(err){
    console.log('Error ' + err);
});

console.log('Connection is establishing now...');


// Get our stats channels ID
const totalonline = client.channels.get('704518817883226133');
const totalscores = client.channels.get('704518891820286010');
const totalpp = client.channels.get('704519257601343528');
const totalplay = client.channels.get('704519323087273995');

module.exports = function (client) {
    client.on('message', async message => 
    {
        // Updating stats every 30 seconds
        setInterval(function() {
            console.log('Getting stats update..')

        var totalonline = rclient.get("ripple:online_users", redis.print);
        var totalscores = rclient.get("ripple:submitted_scores", redis.print);
        var totalpp = rclient.get("ripple:total_pp", redis.print);
        var totalplay = rclient.get("ripple:total_plays", redis.print);

        // Set channel names
        totalonline.setName("Total Online: " + totalonline)
        .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
        .catch(console.error);

        totalscores.setName("Total Scores: " + totalscores)
        .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
        .catch(console.error);

        totalpp.setName("Total PP: " + totalpp)
        .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
        .catch(console.error);

        totalplay.setName("Total Plays: " + totalplay)
        .then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
        .catch(console.error);
        }, 30000)
    });
}


