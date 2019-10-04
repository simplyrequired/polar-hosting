// - Discord Packages - \\
const Discord = require("discord.js");
const Client = new Discord.Client();

// - Bot settings - \\
const Prefix = ";";


// - Welcome Settings - \\
Client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(ch => ch.name === "welcome");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setTitle(`User joined!`)
    .setColor(0xffffff)
    .setDescription(`Hey ${member}! Welcome to Juiceyz`)
    .setFooter("SecurityService")
    .setTimestamp();
  channel.send(embed);
});

Client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find(ch => ch.name === "welcome");
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setTitle(`User left...`)
    .setColor(0xffffff)
    .setDescription(`Aww! ${member} come back soon!`)
    .setFooter("SecurityService")
    .setTimestamp();
  channel.send(embed);
});

// - Commando Settings - \\
Client.on("ready", () => {
  console.log(
    `Bot has started, with ${Client.users.size} users, in ${Client.channels.size} channels of ${Client.guilds.size} guilds.`
  );
  console.log(`Logged in as: ${Client.user.username} BotID: ${Client.user.id}`);
  Client.user.setPresence({
    game: {
      name: "SecurityServiceV1",
      type: "STREAMING",
      url: "https://www.twitch.tv/simplyrequiredrblx"
    }
  });
});

Client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(Prefix) !== 0) return;
  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const embed = new Discord.RichEmbed()
      .setTitle("Ping?")
      .setColor(0xffffff)
      .setDescription(`❤️ ${Math.round(Client.ping)}ms`)
      .setFooter("SecurityService")
      .setTimestamp();
    message.channel.send(embed);
  }

  if (command === "development") {
    if (!message.member.roles.some(r => [`BotAuth`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "development-announcements"
    );
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle("Development Announcement")
      .setColor(0xffffff)
      .setDescription(sayMessage)
      .setFooter("SecurityService")
      .setTimestamp();
    channel.send(embed);
    message.channel.send("Alright! Sended");
  }
  
    if (command === "staff-announce") {
    if (!message.member.roles.some(r => [`BotAuth`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "staff-announcements"
    );
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle("Staff Announcement")
      .setColor(0xffffff)
      .setDescription(sayMessage)
      .setFooter("SecurityService")
      .setTimestamp();
    channel.send(embed);
    message.channel.send("Alright! Sended");
  }

  if (command === "suggest") {
    if (!message.member.roles.some(r => [`Verified`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    const channel = message.guild.channels.find(
      ch => ch.name === "suggestions"
    );
    if (!channel) message.channel.send("I could not find the channel!");
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username}'s Suggestion`)
      .setColor(0xffffff)
      .setThumbnail(`${message.author.displayAvatarURL}`)
      .setDescription(sayMessage)
      .setFooter("SecurityService")
      .setTimestamp();
    channel.send(embed);
  }
  if (command === "products") {
    if (!message.member.roles.some(r => [`Verified`].includes(r.name)))
      return message.channel.send(
        `Hey! ${message.author}, You don't have the permissions to use this command!`
      );
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username}'s Purchase list`)
      .setColor(0xffffff)
      .setThumbnail(`${message.author.displayAvatarURL}`)
      .setDescription("**None**")
      .setFooter("SecurityService")
      .setTimestamp();
    message.channel.send(embed);
  }
  
  if (command === "say") {
    if (!message.member.roles.some(r => [`BotAuth`].includes(r.name)))
      return message.reply(
        "Sorry! You don't have any permissions to use this command."
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }
  if (command === "talk") {
    if (!message.member.roles.some(r => [`BotAuth`].includes(r.name)))
      return message.reply(
        "Sorry! You don't have any permissions to use this command."
      );
    const sayMessage = args.join(" ");
    message.delete().catch(O_o => {});
    message.channel.send(sayMessage);
  }

  if (command === "purge") {
    const deleteCount = parseInt(args[0], 10);
    if (!message.member.roles.some(r => [`BotAuth`].includes(r.name)))
      if (!deleteCount || deleteCount < 2 || deleteCount > 100)
        return message.reply(
          "Please provide a number between 2 and 100 for the number of messages to delete"
        );

    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel
      .bulkDelete(fetched)
      .catch(error => message.reply(`${error}`));
  }
});


Client.login(process.env.TOKEN);
