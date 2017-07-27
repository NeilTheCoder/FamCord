exports.run = function(client, message, args) {
message.channel.send(`**Hey... Oh no! Ye private Invite slid in the DMs! Rrrrrr! :arrow_right: :mailbox_with_mail:**`).then(() => message.author.send(`**Don't tell ${client.user.tag} that the invite is here!\n => https://discordapp.com/oauth2/authorize?client_id=339953945038553089&scope=bot&permissions=1043472446**`))
};