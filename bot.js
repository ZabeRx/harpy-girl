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
    
const palabras = [":v", "c mamo", ":'v", ":,v", "V:", ":y", ":u", "u:", "v:", "V:", ":V", ">:v", ">:V", "v:<", "V:<", "alv", "kha", "Ecks di"];
    if(palabras.some(p => message.content.includes(p))){

      message.delete( );
    }
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
