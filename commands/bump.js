const d = require('discord.js')
const c = require('../settings.json')
exports.run = async (client, message, args) => {
const embed = new d.RichEmbed();
        message.channel.sendMessage(`**Successfully Bumped __${message.guild.name}__**`)
        let bumped = client.channels.get('340730178529656846')
        lonk = message.channel.createInvite()
        var resolvedProm = Promise.resolve(lonk);
        var thenProm = resolvedProm.then(function(value) {
            console.log("" + value);
embed.setColor('RANDOM')
embed.setAuthor('Bumped Server', "https://images-ext-2.discordapp.net/external/JsuunnrSDxU8do6YXhGyRqRjEWTN4L98Vpf7nd8KxZI/https/emojipedia-us.s3.amazonaws.com/thumbs/120/google/80/ok-hand-sign_1f44c.png")
embed.addField('Server Name', message.guild.name, true)
embed.addField('Server Invite', value, true)
embed.addField('Server ID', message.guild.id, true)
embed.addField('Server Owner', `__**${client.users.get(message.guild.ownerID).tag}**__`, true)
embed.addField('Member Count', message.guild.memberCount, true)
embed.setThumbnail(message.guild.iconURL)
embed.setFooter(`Bumped by ${message.author.tag}`)
bumped.send({embed})
	})
};

exports.conf = {
  hidden: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bump',
  description: 'Bumps you server!',
  usage: `${c.prefix}bump`,
};