const { MessageEmbed, Message } = require("discord.js")
const msg = require("../json/messages.json")

module.exports = {
    name: "invite",

    run: async(client, message, args) => {
        const embed = new MessageEmbed() 
        .setTitle(msg.title + "Invite")
        .setDescription("[Invite](https://discord.com/api/oauth2/authorize?client_id=971728490938392638&permissions=8&scope=bot) + [Discord-Link]")
        message.channel.send(embed)
    }
}