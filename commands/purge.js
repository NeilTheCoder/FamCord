const settings = require('../settings.json')
exports.run = function(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== settings.ownerID && message.author.id !== settings.adminID) return message.reply('You Dont Have Enough Permissions!');
var result = args.join(' ');
        limit: 99
        let messagecount = parseInt(result);
	 if(!messagecount)
return message.channel.send(`**Please Specify an Amount of Messages!**`);
        message.channel.fetchMessages({
            limit: messagecount + 1
        }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  hidden: false,
  aliases: ['clear', 'prune', 'clr'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Purge the XX Amount of Messages! :warning: MAX: 99',
  usage: `${settings.prefix}purge [XX]`,
};