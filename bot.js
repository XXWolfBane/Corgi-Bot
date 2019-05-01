const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
var prefix = "!"
bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on('ready', () => {
  var statuses = [`Over ${bot.guilds.size} servers!`, "For !help", "Supporting your servers!"]
  var result = statuses[Math.floor(Math.random() * statuses.length)]
  bot.user.setActivity(`Loading Corgi Bot...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    setInterval(() => {
      if (result == statuses[0]) {
        bot.user.setActivity(result, {type: "WATCHING"})
      }
   
      if (result == statuses[1]) {
        bot.user.setActivity(result, {type: "LISTENING"})
      }
   
      if (result == statuses[2]) {
        bot.user.setActivity(result, {type: "PLAYING"})
      }
    }, 25000)
  }, 10000)
    console.log("Corgi is alive!")
})

  bot.on('message', message => {
  let mArray = message.content.split(" ")
  let args = mArray.slice(1)
  let cmd = bot.commands.get(mArray[0].slice(prefix.length))
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd) {
    cmd.run(bot, message, args, Discord)
    console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
    
  }
})

bot.login(process.env.Token)
