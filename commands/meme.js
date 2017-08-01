const c = require('../settings.json')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
	message.delete();
        var memes = ["http://godbots.pw/memes/gif/1.gif", "http://godbots.pw/memes/gif/2.gif", "http://godbots.pw/memes/gif/3.gif", "http://godbots.pw/memes/gif/4.gif", "http://godbots.pw/memes/gif/5.gif", "http://godbots.pw/memes/gif/6.gif", "http://godbots.pw/memes/gif/7.gif", "http://godbots.pw/memes/gif/8.gif", "http://godbots.pw/memes/gif/9.gif", "http://godbots.pw/memes/gif/10.gif", "http://godbots.pw/memes/gif/11.gif", "http://godbots.pw/memes/gif/12.gif", "http://godbots.pw/memes/gif/13.gif", "http://godbots.pw/memes/gif/14.gif", "http://godbots.pw/memes/gif/15.gif", "http://godbots.pw/memes/gif/16.gif", "http://godbots.pw/memes/gif/17.gif", "http://godbots.pw/memes/gif/18.gif", "http://godbots.pw/memes/gif/19.gif", "http://godbots.pw/memes/gif/20.gif", "http://godbots.pw/memes/gif/21.gif", "http://godbots.pw/memes/gif/22.gif", "http://godbots.pw/memes/gif/23.gif", "http://godbots.pw/memes/gif/24.gif", "http://godbots.pw/memes/gif/25.gif", "http://godbots.pw/memes/gif/26.gif", "http://godbots.pw/memes/gif/27.gif", "http://godbots.pw/memes/gif/28.gif", "http://godbots.pw/memes/gif/29.gif", "http://godbots.pw/memes/gif/30.gif", "http://godbots.pw/memes/gif/31.gif", "http://godbots.pw/memes/gif/32.gif", "http://godbots.pw/memes/gif/33.gif", "http://godbots.pw/memes/gif/34.gif", "http://godbots.pw/memes/gif/35.gif", "http://godbots.pw/memes/gif/36.gif", "http://godbots.pw/memes/gif/37.gif"];
        const embed = new Discord.RichEmbed()
            embed.setAuthor(message.author.tag, "https://images-ext-1.discordapp.net/external/G8xAvybO-2B80GxsmWm-LqeaRYp8SZU2ubfkW6Xfohc/https/images-ext-1.discordapp.net/external/kM10hRmnturbyk0Ud6zH6jhaAbUqooXR4RQipiZe5uw/https/images-ext-2.discordapp.net/external/87rdv6EfrkeXrS8LRQ5BD91sL2226HzG5VWdncuVsw0/https/i.imgur.com/RHagTDg.png")
            embed.setColor('RANDOM')
            embed.setImage(memes[Math.floor(Math.random() * memes.length)])
        message.channel.send({embed});
};

exports.conf = {
  hidden: false,
  aliases: ['meme', 'memez', 'm'],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'Shows random Memes',
  usage: `${c.prefix}meme`,
};