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

//Sql stuff

const mysql = require("mysql")

function generateXP() {
  return Math.floor(Math.random() * (15 - 1 + 1)) + 10;
} //Sexy num gen function

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "xqKVpmRNaL",
  password: process.env.sqlpass,
  database: "xqKVpmRNaL"
})

con.connect(err => {
  if(err) throw err;
  console.log("connected.")
  con.query("SHOW TABLES", console.log)
}) // Tests if the bot can connect.

bot.on("message", message => {
con.query(`SELECT * FROM twf_xp WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err
    
  let sql;
    
    if(message.content == ".xp") return;
    if(message.author.bot) return;
  
    if(rows.length < 1 ) {
      sql =  `INSERT INTO corgi_bot (id, xp) VALUES ('${message.author.id}', ${generateXP()})`
    } else {
    let xp = rows[0].xp;
      sql = `UPDATE corgi_bot SET xp = ${xp + generateXP()} WHERE id = '${message.author.id}'`
    }
  con.query(sql, console.log);
  })
}) // I want to fucking die.






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
