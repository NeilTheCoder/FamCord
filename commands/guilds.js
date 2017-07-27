exports.run = function(client, message, args) {
message.channel.send(`**Currently in __${client.guilds.size}__ Guilds!**`)
};