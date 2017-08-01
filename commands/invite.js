const settings = require('../settings.json')
exports.run = function(client, message, args) {
message.channel.send(`**Hey... Oh no! Ye private Invite slid in the DMs! Rrrrrr! :arrow_right: :mailbox_with_mail:**`).then(() => message.author.send(`**Don't tell ${client.user.tag} that the invite is here!\n => https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1043472446**`))
};

exports.conf = {
  hidden: false,
  aliases: ['pong', 'pingpong'],
  permLevel: 0
};

exports.help = {
  name: `invite`,
  description: 'Sends ye Pirate\'s invite!',
  usage: `${settings.prefix}invite`,
};