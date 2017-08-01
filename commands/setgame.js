const c = require('../settings.json')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
message.delete();
const embed = new Discord.RichEmbed();
var result = args.join(' ');
if (client.user.presence.game === undefined) {
client.user.presence.game = 'No Game Displayed!';
}
if(message.author.id !== c.ownerID && message.author.id !== c.adminID)
return message.channel.send(`**Must be Owner or Admin!\nOwner: \`\n${client.users.get(c.ownerID).tag}\`\nAdmin: \`\n${client.users.get(c.adminID).tag}\`\**`);
embed.setAuthor('Game Changed!', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
embed.setDescription(`**Changed my Game to __${result}__** :video_game:`)
embed.setColor('RANDOM')
message.channel.send({embed})
client.user.setGame(result)
};

exports.conf = {
  hidden: false,
  aliases: ['sgame', 'setg'],
  permLevel: 0
};

exports.help = {
  name: `setgame`,
  description: 'Sets the bot\'s game!',
  usage: `${c.prefix}setgame [game]`,
};
