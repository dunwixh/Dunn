const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "meme command, sends a meme from certain place",

    async run (bot, message, args) {
        const subReddits = ["meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]



        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your **meme** has been granted. All the way from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed)
    }
}
