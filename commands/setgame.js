const config = require('../settings.json');

exports.run = function(client, message, args) {
message.delete();
if(message.author.id !== config.ownerID && message.author.id !== config.adminID) return message.channel.send(`**No permissions to Change my game Status!**`)
let game = args.join(' ');
client.user.setGame(game);
message.channel.send(`**Changed my game to __${game}__! :video_game:**`)
};