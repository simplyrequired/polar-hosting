const Discord = require('discord.js');
const Client = new Discord.Client();
const Prefix = ';';

// - Role Config - \\
const CreatorRole = "Polar Bot";
const HRRole = "SHR";
const DevRole = "SHR";
const Creator = 'Simply_Required';
const ServerName = 'Polar Airlines'

Client.on('ready', ()=> {
    console.log(`Logged in with username: ${Client.user.username}`)
    


Client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(ch => ch.name === 'general');
        if (!channel) return;
        channel.send(`Welcome to the server, ${member}`);
      });

Client.on('guildMemberRemove', member => {
        const channel = member.guild.channels.find(ch => ch.name === 'general');
        if (!channel) return;
        channel.send(`${member} has left 😔`);
      });
})






// - Fun Commands - \\ 
Client.on("message", async message => {
    if(message.author.bot) return;
      if(message.content.indexOf(Prefix) !== 0) return;
      const args = message.content.slice(Prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      if(command === "commandant") {
            const m = await message.channel.send("Ping?");
            m.edit(`hes very hot xd`)
    }

    
 // - Creator Command - \\
 if(command === "creator") {
    const m = await message.channel.send(`My creator/owner is: ${Creator}.`);
  }
  
  
  
   // - Help Command - \\
   if(command === "help") {
    const m = await message.channel.send("Need help?");
    m.edit(`Nothing much yet!`)
  }
 
  
    // - Ping Command - \\
    if(command === "ping") {
      const m = await message.channel.send("Ping?");
      m.edit(`>>> **Pong!**\n⏱${m.createdTimestamp - message.createdTimestamp}ms\n❤️ ${Math.round(Client.ping)}ms`);
    }
});




// - Permissions needed+ Commands - \\
Client.on("message", async message => {
  if(message.author.bot) return;
    if(message.content.indexOf(Prefix) !== 0) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  // - Annouce Command - \\
  if(command === "announce") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'announcements');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
          message.channel.send('Succesfully announced!')
  
  }
      if(command === "flight-announce") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'flight-announcements');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
              message.channel.send('Succesfully announced!')
  
  }
      if(command === "dev-announce") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'development-announcements');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
              message.channel.send('Succesfully announced!')
  
  }
          if(command === "event") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'events');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
                  message.channel.send('Succesfully announced!')
  
  }
              if(command === "staff-announce") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'staff-announcements');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
                      message.channel.send('Succesfully announced!')
  
  }
  // - An Usefull trollling command- \\
  if(command === "say") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${DevRole}`].includes(r.name)) )
    return message.reply("Ok...");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  if(command === "talk") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.reply("Ok...");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

});

// - Adminstrative Commands - \\
Client.on("message", async message => {
  if(message.author.bot) return;
    if(message.content.indexOf(Prefix) !== 0) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  // - Ban User - \\
  if(command === "kick") {
message.channel.send("This command is perm disabled due issues");

  }
  
  if(command === "ban") {
message.channel.send("This command is perm disabled due issues");
  }
  // - Purge message - \\
if(command === "purge") {
  const deleteCount = parseInt(args[0], 10);

  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`${error}`));
}

});

// - Creator & Server owner Only Private Commands - \\





// - Client Login - \\
Client.login(process.env.BOT_TOKEN);
