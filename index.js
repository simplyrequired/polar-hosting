const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ';'

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`Being edited in studio`);
  client.user.setStatus('idle')
});



client.on("message", async message => {
if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "ping") {

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    message.channel.send("https://tenor.com/view/annoying-who-pinged-me-angry-gif-14512411");
  }
  if(command === "kly") {
    const m = await message.channel.send("GET DAFUQ OUT OF HERE");
    message.channel.send("https://cdn.discordapp.com/attachments/484917807910354944/616926390666919936/video0.mov");
  }
  if(command === "getroles") {
    message.react('👍')
    const m = await message.channel.send(`>>> **Database**\nCurrent Roles:\n${message.author.roles}\nDo you want to update your roles?`);
  }
  if(command === "souinfo") {
    const m = await message.channel.send(">>> **Group Info**\n SOU group link:\nhttps://www.roblox.com/groups/4339734/SOU-Special-Operations-Unit#!/about\nAbout: We are a military/SWAT themed group");
  }
  if(command === "say") {
    if(!message.member.roles.some(r=>["[DT] Development Team", "[D] Developer"].includes(r.name)) )
    return message.reply("Sorry! you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  if(command === "suggest") {
    if(!message.member.roles.some(r=>["[DT] Development Team", "Verified"].includes(r.name)) )
    return message.reply("Sorry! you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'suggestions');
  if (!channel) return;
         channel.send(`Username: ${message.author}\nRank: Unknown(soz)\nSuggestion: ` + sayMessage);
       message.react('👍');
       message.react('👎');
  }
    if(command === "s") {
    if(!message.member.roles.some(r=>["[DT] Development Team", "Verified"].includes(r.name)) )
    return message.reply("Sorry! you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'suggestions');
  if (!channel) return;
         channel.send(`Username: ${message.author}\nRank: Unknown(soz)\nSuggestion: ` + sayMessage);
             message.react('👍');
       message.react('👎');
  }
    if(command === "suggestion") {
    if(!message.member.roles.some(r=>["[DT] Development Team", "Verified"].includes(r.name)) )
    return message.reply("Sorry! you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const channel = message.guild.channels.find(ch => ch.name === 'suggestions');
  if (!channel) return;
         channel.send(`Username: ${message.author}\nRank: Unknown(soz)\nSuggestion: ` + sayMessage);
             message.react('👍');
       message.react('👎');
  }
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Bot adminstrator", "[D] Developer"].includes(r.name)) )
      return message.reply("Sorry! you don't have permissions to use this!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    if(!message.member.roles.some(r=>["[D] Developer"].includes(r.name)) )
      return message.reply("Sorry! you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }














});

client.login(process.env.BOT_TOKEN);
