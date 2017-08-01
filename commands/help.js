const Discord = require('discord.js')
const settings = require('../settings.json');
exports.run = (client, message, params) => {
message.delete();
const embed = new Discord.RichEmbed();
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
embed.setAuthor('Commands List', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
embed.setTitle(`Take :pencil: Do ${settings.prefix}help [command] for more info!`)
embed.setDescription(`**\n${client.commands.map(c => `\`\n${settings.prefix}${c.help.name}\`\n${' '.repeat(longest - c.help.name.length)}       - ${c.help.description}`).join('\n')}**\n\n**Join __${client.user.tag}__ Support Server Today!\n:arrow_right: https://discord.gg/qNYeyME :arrow_left:**`)
embed.setThumbnail(client.user.avatarURL)
embed.setFooter(`Help Command Requested by ${message.author.tag}`)
embed.setColor('RANDOM')
message.channel.send({embed})
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
	embed.setAuthor(`Command Name: ${settings.prefix}${command.help.name}`, "https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png")
	embed.setDescription(`**Command Usage: __${command.help.usage}__\nDescription: __${command.help.description}__**`)
     message.channel.send({embed})
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Displays all Commands!',
  usage: `${settings.prefix}help [command]`
};