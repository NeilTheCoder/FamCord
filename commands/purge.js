exports.run = function(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You Dont Have Enough Permissions!');
        if (message.author == client.user) return;
        limit: 99
        let messagecount = parseInt(result);
        message.channel.fetchMessages({
            limit: messagecount + 1
        }).then(messages => message.channel.bulkDelete(messages));
};
