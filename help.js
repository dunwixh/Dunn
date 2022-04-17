const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "Sends a embed of all the commands of sloth",
    execute(message) {
        const helpembed = new Discord.MessageEmbed()
            .setColor(`BLUE`)
            .setTitle(`Sloth! Help Page!`)
            .setThumbnail('')
            .setDescription(`Prefix: \`sl.\``)
            .addFields(
                { name: '**:tools: What Is Sloth!**', value: "`Sloth!` `is a` `Bot Designed To Help You In Any Way Shape Or Form`"},
                { name: '**:tada: Fun Commands**', value: "`cah,` `cah Is Basiclly If You Do 'sl.cah' You Will Get A Black And White Card And They Are Very Dark`" },
                { name: '**:lock: moderation Commands**', value: "`ban` `kick` `clear`" },
                )
            .setTimestamp();
        message.channel.send({
            embeds: [helpembed]
        });
    }
}
