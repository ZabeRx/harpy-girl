const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("¡La pajarita está lista!");
  
   client.user.setGame('Experimentando con tu corazón.');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
