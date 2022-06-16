const { MessageEmbed, Message } = require("discord.js")
const msg = require("../json/messages.json")

module.exports = {
    name: "version",

run: async(client, message, args) => {
    const embed = new MessageEmbed()
    .setTitle(msg.title + "Version")
    .setDescription("Development/Maintance")
    message.channel.send(embed)
    }
}