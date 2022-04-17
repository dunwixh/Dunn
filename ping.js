const Discord = require('discord.js');
const packageJSON = require("../../package.json");
const fs = require('fs');

module.exports = {
    name: "ping",
    description: "Sends the bots ping",
    execute(message, client) {
        const pingingembed = new Discord.MessageEmbed()
        .setAuthor('Flasks! | Latency identifier', `${message.author.displayAvatarURL({ dynamic: true })}`)
        .setDescription("Pinging...")

        message.channel.send({ embeds: [pingingembed]}).then((msg) => {
            ping = msg.createdTimestamp - message.createdTimestamp;
            api = Math.round(client.ws.ping)

            fs.writeFileSync("ping.pong", `${ping + api}`, 'utf-8')

            discordJSVersion = packageJSON.dependencies["discord.js"];
            const pingembed = new Discord.MessageEmbed()
                .setAuthor('Flasks! | Latency identifier', `${message.author.displayAvatarURL({ dynamic: true })}`)
                .addFields(
                    { name: `** Total Ping ** `, value: `${ping + api}ms`, inline: true },
                    { name: '**Latency**', value: `${ping}ms`, inline: true },
                    { name: `** API ** `, value: `${api}ms`, inline: true },
                )
                .setFooter(`Discord.js Version ${discordJSVersion}`)
                .setTimestamp();
            message.channel.send({
                embeds: [pingembed]
            });
            msg.delete();
        });
    }
}
