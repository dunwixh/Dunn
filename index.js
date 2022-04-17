// This is needed for discord.js
const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//Stuff added by npm
const fs = require('fs'); //npm i fs

//This code is for reading commands on luanch 
const config = require('./config/config.json');
const prefixchecker = require('./config/config.json');
const token = config.token;
const configprefix = prefixchecker.prefix;
client.commands = new Discord.Collection();

// Define a function to load commands from a specific given folder
function loadCommandsFromFolder(folder) {
    const commandFiles = fs.readdirSync(folder).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
// Load commands from folder './commands/fun'
loadCommandsFromFolder('./commands/fun');

// Load commands from folder './commands/moderation'
loadCommandsFromFolder('./commands/moderation');

// Load commands from folder './commands/util'
loadCommandsFromFolder('./commands/util');

// Load commands from folder './commands/ownercmds'
loadCommandsFromFolder('./commands/ownercmds');

//Prefix for bot
const prefix = configprefix;

//This turns the bot on
client.on("ready", () => {
    console.log(`[+] Logged in as ${client.user.tag}!`);
    client.user.setActivity(`Playing With The Other Cats In The Box`, { type: 'PLAYING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
    client.user.setActivity(`Playing With The Other Cats`, { type: 'PLAYING' }) // STREAMING, WATCHING, CUSTOM_STATUS, PLAYING, COMPETING
});

//This is for Commands to register
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, client);
    }
    if (command === 'status') {
        client.commands.get('status').execute(message, Discord, client, args);
    }
    if (command === 'cah') {
        client.commands.get('cah').execute(message, Discord);
    }
    if (command === 'help') {
        client.commands.get('help').execute(message, Discord);
    }
    if (command === 'staff') {
        client.commands.get('staff').execute(message, Discord);
    }
    if (command === 'sloth') {
        client.commands.get('sloth').execute(message, Discord);
    }
    if (command === 'faq') {
        client.commands.get('faq').execute(message, Discord);
    }
    if (command === 'poll') {
        client.commands.get('poll').execute(message, Discord, args);
    }
    if (command === 'meme') {
        client.commands.get('meme').execute(message, Discord);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, client, args, Discord);
    }
    if (command === 'ban') {
        client.commands.get('ban').execute(message, client, args, Discord);
    }
    if (command === 'kick') {
        client.commands.get('kick').execute(message, client, args, Discord);
    }
    if (command === 'check') {
        client.commands.get('check').execute(message, args, Discord);
    }
    if (command === 'stafff') {
        client.commands.get('stafff').execute(message, Discord);
    }
 
})



//Bot token below to get token go to: https://discord.com/developers/applications
client.login(token)
