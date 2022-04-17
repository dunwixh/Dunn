const Discord = require('discord.js')

module.exports = {
    name: "faq",
    description: "Sends a embed of all the commands of sloth",
    execute(message) {
        const faqembed = new Discord.MessageEmbed()
            .setColor(`BLUE`)
            .setTitle(`Sloth! Staff Team`)
            .setThumbnail('')
            .setDescription(`Prefix: \`sl.\``)
            .addFields(
                { name: '**:tools: What Is Sloth! ?**', value: "`Sloth! Is A All Around Friendly Bot.`"},
                { name: '**:tools: Why Should I Use Sloth! ?**', value: "`You Should Use Sloth! Because It Is One Of The Best Free Discord Bots`"}
                )
            .setTimestamp();
        message.channel.send({
            embeds: [faqembed]
        });
    }
}
