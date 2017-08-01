const c = require('../settings.json')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
message.delete();
	if(message.author.id !== c.ownerID && message.author.id !== c.adminID)
	return message.channel.send(`**You can't do this command :x:**`);
  if (!args || args.size < 1) return message.channel.send('Must provide a command to reload.');

  let command;
  if (client.commands.has(args[0])) {
    command = client.commands.get(args[0]);
  } else if (client.aliases.has(args[0])) {
    command = client.commands.get(client.aliases.get(args[0]));
  }
  if (!command) return message.channel.send(`The command \`${args[0]}\` doesn't seem to exist, nor is it an alias. Try again!`);

  if (command.db) await command.db.close();

  command = command.help.name;

  delete require.cache[require.resolve(`./${command}.js`)];
  const cmd = require(`./${command}`);
  client.commands.delete(command);
  if (cmd.init) cmd.init(client);
  client.aliases.forEach((cmd, alias) => {
    if (cmd === command) client.aliases.delete(alias);
  });
  client.commands.set(command, cmd);
  cmd.conf.aliases.forEach(alias => {
    client.aliases.set(alias, cmd.help.name);
  });

  message.channel.send(`The command \`${command}\` has been reloaded`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 10
};

exports.help = {
  name: 'reload',
  category: 'System',
  description: 'Reloads a command that\'s been modified.',
  usage: `${c.prefix}reload [command]`,
  extended: 'This command is designed to unload, then reload the command from the command & aliases collections for the changes to take effect.'
};