const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("¡La pajarita está lista!");
    client.user.setGame('Experimentar con tu corazón.');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    
const palabras = [":v", "c mamo", ":'v", ":,v", "V:", ":y", ":u", "u:", "v:", "V:", ":V", ">:v", ">:V", "v:<", "V:<", "alv", "kha", "Ecks di", "papus", "mamus", "rico lino", "ricolino", "riko lino", "rikolino"];
    if(palabras.some(p => message.content.includes(p))){

      message.delete( );
    }
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
