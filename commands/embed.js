const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
message.delete();
let msg = args.join(' ');
embed.setAuthor(message.author.tag, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
embed.setColor('RANDOM')
embed.setDescription(msg)
message.channel.send({embed});
}