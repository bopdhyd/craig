var config = require("../config.json");
const Discord = require("discord.js");
module.exports = class help {
  constructor() {
    (this.name = "help"),
      (this.alias = ["h"]),
      (this.usage = `${config.prefix}help`);
  }

  async run(client, message, args) {
    var helpConf = require("./comConfig/help.json");
    const com = args[1];
    const notFound = new Discord.MessageEmbed()
      .setColor("#D00B00")
      .setTitle("Help")
      .addField("List", `${helpConf.list}`);
    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#D00B00")
      .setTitle("Help")
      .addField(`${com}`, `${helpConf[com]}`);
    if (helpConf[com] === undefined) return message.channel.send(notFound);
    if (helpConf[com] != undefined) return message.channel.send(helpEmbed);
  }
};
