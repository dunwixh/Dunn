const Discord = require('discord.js')
module.exports = {
    name: "staff",
    description: "Sends a embed of all the commands of sloth",
    execute(message) {
        const staffembed = new Discord.MessageEmbed()
            .setColor(`BLUE`)
            .setTitle(`Sloth! Staff Team`)
            .setThumbnail('')
            .addFields(
                { name: '**:tools: Meet The Staff Team**', value: "`We Do Not Currently Have Any Staff. But You May Apply If You Would Like.`"},
                { name: '**:tools: Sloth! Developers**', value: "`Dunn#6099 , Nepeta.#5050` " },
                { name: '**:lock:  Owner **', value: "`Dunn#6099` " },
                )
            .setTimestamp();
        message.channel.send({
            embeds: [staffembed]
        });
    }
}
