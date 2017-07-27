const config = require('../settings.json');

exports.run = function(client, message, args) {
let reason = args.slice(1).join(' ');
var user = message.mentions.users.first();
var member = message.guild.member(user);
if(!message.member.hasPermission('KICK_MEMBERS') && message.author.id !== config.adminID && message.author.id !== config.ownerID) return message.channel.send(`**You don't have Enough Permissions!** :no_entry_sign:`);
if(!user)
return message.channel.send(`**Please Specify a User!**`)
if(!reason)
return message.channel.send(`**Please add a Reason!**`)
message.channel.send(`**${user.tag} got kicked by __${message.author.username}__\nReason: ${reason}** :wave:`)
member.kick();
}