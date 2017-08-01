const Discord = require('discord.js')
const c = require('../settings.json')
exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed();
embed.setColor('RANDOM')
embed.setDescription(`**Currently in __${client.guilds.size}__ Guilds!**`)
message.channel.send({embed})
};
exports.conf = {
  hidden: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'guilds',
  description: 'Sends the amount of guilds the Bot is in!',
  usage: `${c.prefix}guilds`,
};