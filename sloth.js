const Discord = require('discord.js')

module.exports = {
    name: "Sloth!",
    description: "Sends a embed of all the commands of sloth",
    execute(message) {
        const staffembed = new Discord.MessageEmbed()
            .setColor(`BLUE`)
            .setTitle(`Sloth! Staff Team`)
            .setThumbnail('')
            .setDescription(`Prefix: \`*\``)
            .addFields(
                { name: '**:Sloth!**', value: "`Sloth Is A discord.js Based Discord Bot Desnigned To Out Peform Any Bot Out There`"},
                )
            .setTimestamp();
        message.channel.send({
            embeds: [staffembed]
        });
    }
}
