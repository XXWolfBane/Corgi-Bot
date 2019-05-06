module.exports.run = (bot, message, args, Discord, con) => {
  let responces = ["You work the in the corner office and you earn:", ""]
  let ae = Math.floor(Math.random()*5000)
  let ra = Math.floor(Math.random()*1)

  message.channel.send(`${responces[ra]}`)
  
  con.query(`UPDATE corgi_bot SET money = ${money + ae} WHERE id = '${message.author.id}'`)
}

module.exports.help = {
  name: "work"
}
