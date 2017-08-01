const config = require('../settings.json');
const d = require('discord.js')
exports.run = function(client, message, args) {
message.delete();
const embed = new d.RichEmbed();
let reason = args.slice(1).join(' ');
var user = message.mentions.users.first();
var member = message.guild.member(user);
if(!message.member.hasPermission('KICK_MEMBERS') && message.author.id !== config.adminID && message.author.id !== config.ownerID) return message.channel.send(`**You don't have Enough Permissions!** :no_entry_sign:`);
if(!user)
return message.channel.send(`**Please Specify a User!**`)
if(!reason)
return message.channel.send(`**Please add a Reason!**`)
embed.addField('Kicked User', user.tag, true)
embed.addField('Responsible Moderator', message.author.tag, true)
embed.addField('Reason', reason, true)
embed.setThumbnail(client.user.avatarURL)
embed.setAuthor('User Got Kicked', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
embed.setColor('RANDOM')
message.channel.send({embed})
member.kick();
}

exports.conf = {
  hidden: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: `ban`,
  description: 'Kicks a Specified User with a Reason!',
  usage: `${config.prefix}ban [user] [reason]`,
};