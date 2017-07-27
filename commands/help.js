const config = require('../settings.json');

exports.run = function(client, message, args) {
message.channel.send(`**:ok_hand: Help messages Slid into DM! :arrow_right: :mailbox_with_mail:**`).then(() => message.author.send(`**\`\`\`http\nSimple Help Message\n\nCommands:\n${config.prefix}ping - Pong!\n${config.prefix}kick - Kicks a User!\n${config.prefix}ban - Bans a User!\n${config.prefix}purge - Purges the XX Amount of Messages\n	Max:99\n${config.prefix}invite - Ye invite is Private! * I got Butter in me hands *.\n${config.prefix}embed - Embeds something.\n${config.prefix}guilds - Sends the amount of Guilds ${client.user.tag} is in!\`\`\`\**`))
};