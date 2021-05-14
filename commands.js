const gif = require("./commands/gif.js");
const insults = require("./commands/insults");

const commands = {
  gif: gif,
};

module.exports = async (msg) => {
  let tokens = msg.content.split(" ");
  let command = tokens.shift(); /**Equivalent to tokens[0] but here, I get rid of tokens[0]
   that's suitable for the followings operations without taking care of the command itself. 
   Let's say that the first step that we're making here is to identify the command name.*/
  if (command.charAt(0) === "!") {
    command = command.substring(1); /**Command without the "!" particle */
    commands[command](msg, tokens); /** tokens does not contain the command string ( i.e. ["!gif"] )anymore */
  } else {
    insults(msg);
  }
};
