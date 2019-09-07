const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ';'

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`with ya money`);
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome ${member} to ${guild.name}, Make sure to read the discord rules but...Have fun!`);
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'administrator-chat');
  if (!channel) return;
  channel.send(`${member} Has connected to ${guild.name} - Connected IP: ERROR - Verified in SOU-Database: No`);
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
    const m = await message.channel.send(">>> **Database**\nThe Database has given an error, RIP you.");
  }
  if(command === "souinfo") {
    const m = await message.channel.send(">>> **Group Info**\n SOU group link:\nhttps://www.roblox.com/groups/4339734/SOU-Special-Operations-Unit#!/about\nAbout: We are a military/SWAT themed group");
  }
  if(command === "say") {
    if(!message.member.roles.some(r=>["[DT] Development Team", "[D] Developer"].includes(r.name)) )
    return message.reply("Sorry, you don't have permissions to use this!");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Bot adminstrator", "[D] Developer"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
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
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
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
    if(command === "recieve") {
    if(!message.member.roles.some(r=>["[C] Commandant", "[D] Developer"].includes(r.name)) )
    return message.reply("Sorry! you don't have permissions to use this!");
    const m = await message.channel.send("Getting Discord API working..");
    m.channel.send('Database has found 1 file.')
    m.channel.send('Sent file to your dm.')
    m.author.send('Hello ww2! This is the last updated script that Simply made for you.\nhttps://www.roblox.com/library/3826714455/A-webhook')
    }
});
client.on('message', message => {
  if (message.content === `${prefix}profile`) {
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username}'s Profile`)
      .setColor(0xFFFFFF)
      .setDescription('This system is still BETA.')
      .addField('Author-ID', `${message.author.id}`, 'true')
      .thumbnail(`${message.author.avatar}`)
      .setfooter('Powerd by Simply_Studios')
    message.channel.send(embed);
  }
});
client.login(process.env.BOT_TOKEN);
