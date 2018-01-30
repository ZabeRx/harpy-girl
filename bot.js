const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
   console.log("¡La pajarita está lista!");
  
   client.user.setGame('Experimentando con tu corazón.');

  });
  var prefix = config.prefix;
  
  client.on("message", (message) => {
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("pong uwu");
    }

  const palabras = [":v", "c mamo", ":'v", ":,v", "V:", ":y", ":u", "u:", "v:", "V:", ":V", ">:v", ">:V", "v:<", "V:<", "alv", "kha", "Ecks di"];
    if(palabras.some(p => message.content.includes(p))){

      message.delete( );
    }
  });
  client.login(process.env.BOT_TOKEN);
