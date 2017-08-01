const Discord = require('discord.js')
const c = require('../settings.json');
exports.run = (bot, m, args) => {
m.delete();
const embed = new Discord.RichEmbed();
let msg = args.join(' ');
if(!msg)
return m.channel.send(`**Please add a Text to say!**`);
embed.setColor('RANDOM')
embed.setDescription(msg)
m.channel.send({embed})
};

exports.conf = {
  hidden: true,
  aliases: ['embed', 'embed'],
  permLevel: 0
};

exports.help = {
    name: 'embed',
    usage: `${c.prefix}embed [text]`,
    description: 'Sends a message via embeds',
};