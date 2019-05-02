module.exports.run = (bot, message, args, Discord, con) => {
  let emb = new Discord.RichEmbed
  .setTitle("Corgi Bot's Ping")
  .setDescription("Heres my ping with Discord!")
  .addField("Ping:", Math.floor(bot.ping))
  
  message.channel.send({embed: emb})
}

module.exports.help = {
"name": "ping"
}
