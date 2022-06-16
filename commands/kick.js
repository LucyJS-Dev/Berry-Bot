const Discord = require("discord.js");
const msg = require("../json/messages.json")

module.exports= {
  name: 'kick',

  run: async(client,message,args,guild) => {

    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Command: kick")
        .setDescription(
          `**Description:** Kick a member. \n` +
            "**Sub Commands:**\n" +
            "\n" +
            "**Usage:**\n" +
            "b!kick [user] (reason) \n" +
            "**Examples:** \n" +
            "b!kick <@947919776179716106> spam"
        )
        .setColor("#BDA000");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot sanction yourself`)
        .setColor("#BD0000");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor("#BDA000");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
        .setColor("#BD0000");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
        .setColor("#2C2F33");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setDescription(`${kicked.tag} has been successfully kicked.`)
      .setColor("#13BD00");
  
    message.channel.send(successfullyembed);

  }
}