module.exports = {
    name: "poll",
    description: "starts a poll",

    async execute(message, Discord, args) {
        let channelID = message.mentions.channels.first()
        let theDescription = args.slice(1).join(" ")

        if(!channelID) return message.reply("Please specify a channel you want the poll to be in!")
        if(!theDescription) return message.reply("Please specify a description/question for the poll!")

        const embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setTitle("Poll!")
        .setDescription(theDescription)
        .setFooter(`Poll hosted by ${message.author.tag}`) //optional
        .setTimestamp();

        let msgEmbed = await channelID.send({ embeds: [embed]})
        await msgEmbed.react('✅') //
        await msgEmbed.react('❌')
    }
}
