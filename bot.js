require("dotenv").config();
//Nedeed modules
const handleCommand = require("./commands");
console.log("beep, beep. Booting up...");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

//Handle login event
client.on("ready", readyDiscord);

function readyDiscord() {
  console.log(`Logged in as ${client.user.tag}. Welcome!`);
}
//

client.on("message", handleCommand);
