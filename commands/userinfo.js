const settings = require('../settings.json')
exports.run = (client, message, args) => {
	message.delete();
        let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }
        let nick = message.guild.members.get(user.id).nickname;
        if (!nick) {
            nick = 'No Nicknames';
        }
        let status = user.presence.status;
        if (status === 'online') {
            status = 'Online';
        } else if (status === 'idle') {
            status = 'Idle';
        } else if (status === 'dnd') {
            status = 'Do Not Disturb';
        } else {
            status = 'Invisible';
        }
        let isStream = 'Current Game';
        if (user.presence.game && user.presence.game.streaming) {
            isStream = 'Current Stream';
        }
        let game;
        if (user.presence.game === null) {
            game = 'No Game Displayed';
        } else if (user.presence.game.streaming) {
            game = `[${user.presence.game.name}](${user.presence.game.url})`;
        } else {
            game = user.presence.game.name;
        }
        let roles = message.guild.members.get(user.id).roles.map(r => r.name).slice(1).join('\n');
        if (roles.length === 0) roles = '-';

        message.channel.send({
            embed: {
                color: 000000,
                title: 'User Info',
                fields: [{
                        name: 'Name',
                        value: user.tag,
                        inline: true
                    },
                    {
                        name: 'ID',
                        value: user.id,
                        inline: true
                    },
                    {
                        name: 'Nickname',
                        value: nick,
                        inline: true
                    },
                    {
                        name: 'Roles',
                        value: roles,
                        inline: true
                    },
                    {
                        name: 'Joined Server',
                        value: message.guild.members.get(user.id).joinedAt.toUTCString(),
                        inline: true
                    },
                    {
                        name: 'Joined Discord',
                        value: user.createdAt.toUTCString(),
                        inline: true
                    },
                    {
                        name: 'Status',
                        value: status,
                        inline: true
                    },
                    {
                        name: isStream,
                        value: game,
                        inline: true
                    }
                ],
                thumbnail: {
                    url: user.displayAvatarURL
                }
            }
        });
    };

exports.conf = {
  hidden: true,
  aliases: ['uifno', 'userstats'],
  permLevel: 0
};

exports.help = {
    name: 'userinfo',
    usage: `${settings.prefix}userinfo [@user]`,
    description: 'Sends a Specified User\'s Information!',
};