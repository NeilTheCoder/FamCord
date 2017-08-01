const Discord = require('discord.js');
exports.run = (client, message, args, level) => {// eslint-disable-line no-unused-vars
  message.delete();
  const embed = new Discord.RichEmbed()
  .setAuthor('ServerInfo', 'https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png')
  .setColor('RANDOM')
  .addField(`Guild Owner`, `${message.guild.owner.user.tag}`, true)
  .addField(`Guild OwnerID`, `${message.guild.ownerID}`, true)
  .addField('Member Count', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} (${message.guild.members.filter(m=>m.user.bot).size} bots)`, true)
  .addField('Guild Location', message.guild.region, true)
  .addField('Created At', message.guild.createdAt.toLocaleString(), true)
  .addField('Number Of Roles', message.guild.roles.size, true)
  .setTimestamp()
  .setFooter('This Guild is Cool!')
  .setThumbnail(message.guild.iconURL)
  message.channel.send({embed}).catch(e => console.error(e));
};

exports.conf = {
  hidden: false,
  aliases: ['info','stats','serverstats','guildinfo','guildstats'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays server information & statistics.',
  usage: 'serverinfo',
  category: 'General',
  extended: 'This command will return an organised embed with server information and statistics.'
};