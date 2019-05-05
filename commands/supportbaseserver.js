module.exports.run = (bot, message, args, Discord, con) => {
  let em = new Discord.RichEmbed()
  .setTitle("Our Discord!")
  .setDescription("You can join this server for support!")
  .addField("Click", `[here](https://discord.gg/QSzVUnZ) to join!` inline=true)
  .setColor("GREEN")
  
  message.channel.send({embed:em})
}

module.exports.help = {
  name: "corgibase"
}
