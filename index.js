
// - Discord Packages - \\
const Discord = require("discord.js");
const Client = new Discord.Client();



// - Bot settings - \\
const Prefix = ';';
const Status = 'Online';
const Username = 'Special operations Bot'


// - Role Config - \\
const CreatorRole = "[BC] Bot Creator";
const ServerOwnerRole = "[C] Commandant";

const HRRole = "[H] Highranks";
const DevRole = "[DT] Development Team";
const Nitro = "Discord Nitro Booster";


// - Creator Config - \\
const Creator = 'Simply_Required';
const ServerOwner = 'ww2kidStudios';


// - Server Settings - \\
const ServerPermLink = 'https://discord.gg/FjMbvQE';
const ServerName = 'Special Operations Unit'



// - Commando Settings - \\
Client.on("ready", () => {
  console.log(`Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`);
  console.log(`Logged in as: ${Client.user.username} BotID: ${Client.user.id}`)
  console.log(`Joined in ${ServerName} Link: ${ServerPermLink}`)
  Client.user.setStatus(Status)
  Client.user.setUsername(Username)
});


// - Normal easy Commands - \\
Client.on("message", async message => {
if(message.author.bot) return;
  if(message.content.indexOf(Prefix) !== 0) return;
  const args = message.content.slice(Prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // - Welcome Command - \\
  Client.on('guildMemberAdd', member => {
    member.send('>>> Hey! Welcome to this server, First of if you are new read the channel. DISCORD-RULES there you will find the current discord rules\n for our community server. Not new? Know the rules? The have fun and send a message in GENRAL, Play around and make friends\n Dont have friends? Rip....')
  });

  Client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Hey ${member}! Welcome to the server 😍`);
  });

 // - Creator Command - \\
 if(command === "creator") {
  const m = await message.channel.send(`My creator/owner is: ${Creator}.`);
}



 // - Help Command - \\
 if(command === "help") {
  const m = await message.channel.send("Need help?");
  m.edit(`>>> **Help?**\nWelcome to the help-page, here are all current commands that I have..Some may not work or some are not listed so..sorry\n**Ping?**\nShows current bot ping.\n**help**\nWell..This command\n**Creator**\nAn command that shows the creator.\n**hr-announce**\nWill announce a message to all HR's\n**announce**\nWill send a message to the announcements channel\n**say**\na random command\n**talk**\nanother random command\n**divisions**\n typ NOT IN CAPS. your division name like: cpt,mru...etc\n**kick**\nKicks a user\n**ban**\nbans a user\n**purge**\ndeleted messages`)
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


  // - HR-Annouce Command - \\
if(command === "hr-announce") {
  if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
  return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
  const sayMessage = args.join(" ");
  message.delete().catch(O_o=>{}); 
  message.channel.send('Succesfully announced!')
  const channel = message.guild.channels.find(ch => ch.name === 'hr-announcements');
  if (!channel) message.channel.send('I could not find the channel!');
       channel.send(sayMessage);

}

  // - Annouce Command - \\
  if(command === "announce") {
    if(!message.member.roles.some(r=>[`${CreatorRole}`, `${HRRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for HR+ only. Are you HR+?\nAsk to update your roles.`);
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send('Succesfully announced!')
    const channel = message.guild.channels.find(ch => ch.name === 'announcements');
  if (!channel) message.channel.send('I could not find the channel!');
         channel.send(sayMessage);
  
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
// - Divisions and information Commands - \\
Client.on("message", async message => {
  if(message.author.bot) return;
    if(message.content.indexOf(Prefix) !== 0) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  // - SOUConfig- \\
const SOUGroup = "[SOU] Special Operations Unit®"
const SOUGroupLink = "https://www.roblox.com/groups/4339734/SOU-Special-Operations-Unit#!/about"
const SOUGroupDesc = "We are a military/SWAT themed group"
const SOUGroupOwner = "ww2kidStudios"

  // - CPTConfig- \\
  const CPTGroup = "[SOU] Commandant Protection Team"
  const CPTGroupLink = "https://www.roblox.com/groups/4804783/SOU-Commandant-Protection-Team#!/about"
  const CPTGroupDesc = "None"
  const CPTGroupOwner = "ww2kidStudios"

  // - MRUConfig- \\
  const MRUGroup = "[SOU] Medical Response Unit"
  const MRUGroupLink = "https://www.roblox.com/groups/4959159/SOU-Medical-Response-Unit#!/about"
  const MRUGroupDesc = "None"
  const MRUGroupOwner = "NewNullthemaster1234"

  // - TPUConfig- \\
  const TPUGroup = "[SOU] Tactical Protection Unit"
  const TPUGroupLink = "https://www.roblox.com/groups/5077868/SOU-Tactical-Protection-Unit#!/about"
  const TPUGroupDesc = "None"
  const TPUGroupOwner = "SilentGhosty"

  // - IAConfig- \\
  const IAGroup = "[SOU] Intelligence Agency"
  const IAGroupLink = "https://www.roblox.com/groups/4821426/SOU-Intelligence-Agency#!/about"
  const IAGroupDesc = "Sending requests to join the group or asking for it will result in a blacklist without excuses."
  const IAGroupOwner = "[DATA EXPUNGED]"

  // - BPConfig- \\
  const BPGroup = "[SOU] Base Police"
  const BPGroupLink = "https://www.roblox.com/groups/4782324/SOU-Base-Police#!/about"
  const BPGroupDesc = "None"
  const BPGroupOwner = "Kly_zo"

  // - ESATConfig- \\
  const ESATGroup = "[E-S-A-T] Elite Stealth Analysis Team"
  const ESATGroupLink = "https://www.roblox.com/groups/4555118/E-S-A-T-Elite-Stealth-Analysis-Team#!/about"
  const ESATGroupDesc = "We are division of the SOU."
  const ESATGroupOwner = "Page cannot be found or no longer exists"

  if(command === "divisions") {
    const m = await message.channel.send("Alright.");
    m.channel.send(`>>> **All current Divisions**\n \n${CPTGroup}\n${BPGroup}\n${TPUGroup}\n${IAGroup}\n${MRUGroup}\n${ESATGroup}`);
  }

  if(command === "divs") {
    const m = await message.channel.send("Alright.");
    m.channel.send(`>>> **All current Divisions**\n \n${CPTGroup}\n${BPGroup}\n${TPUGroup}\n${IAGroup}\n${MRUGroup}\n${ESATGroup}`);
  }
    if(command === "div") {
    const m = await message.channel.send("Alright.");
    m.channel.send(`>>> **All current Divisions**\n \n${CPTGroup}\n${BPGroup}\n${TPUGroup}\n${IAGroup}\n${MRUGroup}\n${ESATGroup}`);
  }
    if(command === "sou") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${SOUGroup}**\n${SOUGroupDesc}\nOwned by: ${SOUGroupOwner}\nLink: ${SOUGroupLink}`);
    }

    if(command === "cpt") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${CPTGroup}**\n${CPTGroupDesc}\nOwned by: ${CPTGroupOwner}\nLink: ${CPTGroupLink}`);
    }

    if(command === "bp") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${BPGroup}**\n${BPGroupDesc}\nOwned by: ${BPGroupOwner}\nLink: ${BPGroupLink}`);
    }

    if(command === "esat") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${ESATGroup}**\n${ESATGroupDesc}\nOwned by: ${ESATGroupOwner}\nLink: ${ESATGroupLink}`);
    }

    if(command === "mru") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${MRUGroup}**\n${MRUGroupDesc}\nOwned by: ${MRUGroupOwner}\nLink: ${MRUGroupLink}`);
    }

    if(command === "ia") {
      const m = await message.channel.send("Alright.!");
      m.channel.send(`>>> **${IAGroup}**\n${IAGroupDesc}\nOwned by: ${IAGroupOwner}\nLink: ${IAGroupLink}`);
    }
    if(command === "tpu") {
      const m = await message.channel.send("Alright.");
      m.channel.send(`>>> **${TPUGroup}**\n${TPUGroupDesc}\nOwned by: ${TPUGroupOwner}\nLink: ${TPUGroupLink}`);
    }
});

// - Adminstrative Commands - \\
Client.on("message", async message => {
  if(message.author.bot) return;
    if(message.content.indexOf(Prefix) !== 0) return;
    const args = message.content.slice(Prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  // - Ban User - \\
if(command === "ban") {
  if(!message.member.roles.some(r=>[`${ServerOwner}`, `${CreatorRole}`].includes(r.name)) )
    return message.channel.send(`Hey! ${message.author}, This command is only for ${CreatorRole} & ${ServerOwner} only. Are you HR+?\nAsk to update your roles.`);
  
  let member = message.mentions.members.first();
  if(!member)
    return message.channel.send('Please provide the user-tag.');
  if(!member.bannable) 
    return message.channel.send(`I cannot ban ${member.user.tag}, It may be cause of my permissions? Or is his role higher then me?`);

  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  
  await member.ban(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
  message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
}
  // - Kick User - \\
if(command === "kick") {
  if(!message.member.roles.some(r=>[`${ServerOwner}`, `${CreatorRole}`, `${DevRole}`].includes(r.name)) )
  message.channel.send(`Hey! ${message.author}, This command is only for ${CreatorRole} & ${DevRole} and ${ServerOwner}only. Are you HR+?\nAsk to update your roles.`);
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!member)
    return message.reply("Please mention a valid member of this server");
  if(!member.kickable) 
  return message.channel.send(`I cannot kick ${member.user.tag}, It may be cause of my permissions? Or is his role higher then me?`);
  let reason = args.slice(1).join(' ');
  if(!reason) reason = "No reason provided";
  await member.kick(reason)
    .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

}
  // - Purge message - \\
if(command === "purge") {
  const deleteCount = parseInt(args[0], 10);

  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

});

// - Creator & Server owner Only Private Commands - \\





// - Client Login - \\
Client.login(process.env.BOT_TOKEN);
