const { MessageEmbed, Message } = require("discord.js")
const msg = require("../json/messages.json")

module.exports = {
    name: "help",

    run: async(client, message, args) => {
        const embed = new MessageEmbed() 
        .setColor("BLUE")
        .setTitle(msg.title +  "Help")
        .setDescription("Here you can see all my commands that I can do!")
        .addField("🛡 Moderation", "ban, kick", true) 
        .addField("🪀 Other", "version, invite", true)
        .setFooter(msg.footer) .setTimestamp()
        message.channel.send(embed)
    }
}