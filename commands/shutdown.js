const c = require('../settings.json')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
message.delete();
	if(message.author.id !== c.ownerID && message.author.id !== c.adminID)
	return message.channel.send(`**You can't do this command :x:**`);
  try {
    const commandUnloads = client.commands.filter(c => !!c.db).array();
    for (const c of commandUnloads) {
      await c.db.close();
    }
    await message.channel.send('Shutting down...');
    await client.destroy();
    process.exit();
  } catch (e) {
    console.log(e);
  }
};

exports.conf = {
  hidden: false,
  aliases: ['restart'],
  permLevel: 10
};

exports.help = {
  name: 'shutdown',
  description: 'This shuts down the bot.',
  usage: `${c.prefix}shutdown`,
  category: 'System',
  extended: 'This will make the bot logout and destroy the client instance before exiting cleanly.'
};