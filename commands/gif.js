const fetch = require("node-fetch");

module.exports = async function (msg, tokens) {
  let gifSearchTerm = "kitty";
  if (tokens.length > 1) {
    gifSearchTerm = tokens.join(" ");
  } else {
    gifSearchTerm = tokens[0];
  }
  const url = `https://g.tenor.com/v1/search?q=${gifSearchTerm}&key=${process.env.TENOR_GIF_API_KEY}`;
  const response = await fetch(url);
  const json = await response.json();
  let index = Math.floor(Math.random() * json.results.length);
  console.log(url);
  console.log(json);
  msg.channel.send(json.results[index].url);
};
