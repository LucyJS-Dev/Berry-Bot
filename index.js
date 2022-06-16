const Discord = require("discord.js")
const client = new Discord.Client()
const conf = require("./json/config.json")
const messages = require("./json/messages.json")
const fs = require("fs")

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {

      if (!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];

      console.log(`${commandName} Loadet!.`);

      client.commands.set(commandName, props);
    });
});


client.on("ready", () => {
    console.clear()
    console.log("----------------------");
    console.log(`Logged in as "${client.user.tag}"`);
    console.log("----------------------");
})


client.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;

    const pre = 'b!'

    if (message.content.indexOf(pre) !== 0) return;
  
    const args = message.content.slice(pre.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if(cmd) {
        cmd.run(client, message, args)
    }
})

client.on("guildCreate", async (guild) => {
    const channel = await guild.channels.cache.filter(ch => ch.type == "text").first()
    channel.send("Thanks for inviting the bot!\nYou can see all commands with **b!**.")
})

client.login(conf.token)