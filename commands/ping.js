const d = require('discord.js')
let settings = require('../settings.json')
exports.run = async (client, message, args) => {
const embed = new d.RichEmbed();
embed.setColor('RANDOM')
embed.setTitle('Pong!', message.author.avatarURL)
embed.setDescription(`**Pong! :ping_pong: Took __${Math.round(client.ping)}__ ms to reply!**`)
message.channel.send({embed})
};

exports.conf = {
  hidden: false,
  aliases: ['pong', 'pingpong'],
  permLevel: 0
};

exports.help = {
  name: `ping`,
  description: 'Pings the bot!',
  usage: `${settings.prefix}ping`,
};
