const chalk = require('chalk');
module.exports = client => {
	console.log(chalk.bgGreen.black(`Logged in as ${client.user.tag}!`));
}
