module.exports.run = (bot, message, args, Discord, con) => {
  let responces = ["You work the in the corner office and you earn:", ""]
  let ae = Math.floor(Math.random()*5000)
  let ra = Math.floor(Math.random()*1)

  message.channel.send(`${responces[ra]} ${ae}`)
  
  con.query(`SELECT * FROM corgi_bot WHERE id = ${message.author.id}`) {
  if(message.author.bot) return;
  let sql;
    sql = "UPDATE corgi_bot SET money = ${money + ae} WHERE id = ${message.author.id}"
  }
  con.query(sql, console.log);
}



module.exports.help = {
  name: "work"
}
