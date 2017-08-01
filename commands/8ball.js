const c = require('../settings.json');
const d = require('discord.js');
exports.run = (bot, m, args) => {
const embed = new d.RichEmbed();
	var msg = args.join(' ');
	if(!msg)
	return m.channel.send(`**Please add a Question!**`);
       var sayings = ["It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes, definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
		"I don\'t think so.",
		"No, cause i hate you.",
		"Yeah, and PepperJS is gay!",
		"Nope, i hate you!",
		"PepperJS#7290 ;-;"
        ];

        var result = Math.floor((Math.random() * sayings.length) + 0);
    embed.setColor('RANDOM')
    embed.addField(':question: Question', msg)
    embed.addField(':8ball: 8Ball\'s Answer', sayings[result])
        m.channel.send({embed});
};

exports.conf = {
  hidden: true,
  aliases: ['8b', '8bull'],
  permLevel: 0
};

exports.help = {
    name: '8ball',
    usage: `${c.prefix}8ball [question]`,
    description: 'Ask 8ball a question',
};