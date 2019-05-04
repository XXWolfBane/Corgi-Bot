module.exports.run = (bot, message, args, Discord, con) => {
  let responces = ["Yes.", "No.", "Most likley", "Ask me agian"]
  let responcea = Math.floor(Math.random()*4)
  message.channel.send(responces[responcea])
}

module.exports.help = {
  name: "8ball"
}
