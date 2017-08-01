const settings = require('../settings.json');

exports.run = function(client, message, args) {
message.delete();
let reason = args.slice(1).join(' ');
var user = message.mentions.users.first();
var member = message.guild.member(user);
if(!message.member.hasPermission('BAN_MEMBERS') && message.author.id !== config.adminID && message.author.id !== config.ownerID) return message.channel.send(`**You don't have Enough Permissions!** :no_entry_sign:`);
if(!user)
return message.channel.send(`**Please Specify a User!**`)
if(!reason)
return message.channel.send(`**Please add a Reason!**`)
embed.setDescription(`**${user.tag} got banned by __${message.author.username}__\nReason: ${reason}** :wave:`)
embed.setAuthor('User Got Banned', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
embed.setColor('RANDOM')
message.channel.send({embed})
member.ban();
};

exports.conf = {
  hidden: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: `ban`,
  description: 'Bans a Specified User with a Reason!',
  usage: `${settings.prefix}ban [user] [reason]`,
};