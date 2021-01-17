const config = require("../config.json")
const redis = require('redis');
const { promisify } = require("util");

const redisClient = redis.createClient({
    host: (config.redisserver.host),
    port: 6379,
    auth_pass: (config.redisserver.password)
});
const redisGetAsync = promisify(redisClient.get).bind(redisClient);

const changeChannelName = async (channel, channelName) => {
    const newChannel = await channel.setName(channelName);
    console.log(`Stat channel renamed to: ${newChannel.name}`);
    return true;
}
const formatNumber = (num) => (num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));

module.exports = (client) => {
    console.log('Establishing connection...');

    const stats = [
        {
            channel: client.channels.cache.get(config.bot.totalonlinech),
            namePrefix: 'In-Game Online: ',
            redisKey: 'ripple:online_users',
        },
        {
            channel: client.channels.cache.get(config.bot.totalregisterch),
            namePrefix: 'Registered: ',
            redisKey: 'ripple:registered_users',
        },
        {
            channel: client.channels.cache.get(config.bot.totalppch),
            namePrefix: 'Total PP: ',
            redisKey: 'ripple:total_pp',
        },
        {
            channel: client.channels.cache.get(config.bot.totalplaych),
            namePrefix: 'Total Plays: ',
            redisKey: 'ripple:total_plays',
        },
    ];

    const updateDiscord = async () => {
        const test = await redisGetAsync('ripple:online_users');

        console.log('Getting server stats updates...');

        const replies = await Promise.all(stats.map(stat => redisGetAsync(stat.redisKey)));
        const result = await Promise.all(stats.map((stat, index) => changeChannelName(stat.channel, `${stat.namePrefix}${formatNumber(replies[index])}`)));

        if (result.filter(each => each).length === stats.length) {
            console.log('Successfully updated server stats on discord!');
        } else {
            console.log('Something went wrong when updating server stats on discord');
        }
    };

    console.log('Connection established!');
    await updateDiscord();

    setInterval(updateDiscord, 5 * 60 * 1000);
}