module.exports.run = (bot, message, args, Discord) => {
  let em = new Discord.RichEmbed
  .setTitle("Corgi Bot's Ping")
  .setDescription("Heres my ping with Discord!")
  .addField("Ping:", Math.floor(bot.ping))
  
  message.channel.send({embed: em})
}

module.exports.help = {
"name": "ping"
}
