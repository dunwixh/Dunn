module.exports = {

    name: "kick",
    description: "kicks a user",
    execute(message, client, args, Discord) {
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            const pemskick = new Discord.MessageEmbed()
                .setColor(`RED`)
                .setTitle(`You dont have the correct permissions!`)
                .setDescription(`Sorry ${message.author} you dont have \`KICK_MEMBERS\``)
                .setTimestamp();
            message.reply({
                embeds: [pemskick]
            })
            return;
        }

        try {
            // Code to kick the member
            // Reason Kick
            const target = message.mentions.users.first();
            const memberTarget = message.guild.members.cache.get(target.id);
            const messageArray = message.content.split(' ');
            const args = messageArray.slice(2).join(' ');            
            if (args) {
                const reasonkickembed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`${target.tag} Was Kicked!`)
                    .setDescription(`Member: \`${target.tag}\` was kicked \n For: \`${args}\``)
                    .addFields(
                        { name: `User's Discord`, value: `${target.tag}`, inline: true },
                        { name: `User's ID`, value: `${target.id}`, inline: true },
                        { name: 'Kicked By', value: `${message.author.tag}`, inline: true },
                    )
                    .setTimestamp();
                message.reply({
                    embeds: [reasonkickembed]
                })
                memberTarget.kick();
                return;
            }
            // No Reason Kick
            if (target) {
                const kickembed = new Discord.MessageEmbed()
                    .setColor(`GREEN`)
                    .setTitle(`${target.tag} Was Kicked!`)
                    .addFields(
                        { name: `User's Discord`, value: `${target.tag}`, inline: true },
                        { name: `User's ID`, value: `${target.id}`, inline: true },
                        { name: 'Kicked By', value: `${message.author.tag}`, inline: true },
                    )

                memberTarget.kick();
                message.reply({
                    embeds: [kickembed]
                })
                return;
            } else {
                message.reply("Please mention a user!")
            }
        } catch (err) {
            const errrorembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("There was a error!")
                .setDescription(`Error details \n \`${err}\``)
            message.reply({
                embeds: [errrorembed]
            })
        }
    }
}
