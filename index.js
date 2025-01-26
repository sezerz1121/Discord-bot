const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Discord bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent, // Ensure this intent is included for message content
    ]
});

// Load sensitive data from environment variables
const DISCORD_TOKEN = process.env.DISCORD_TOKEN; // Your Discord bot token

// Discord bot ready event
client.once('ready', () => {
    console.log('Bot is online!');
});

// Event listener for incoming messages
client.on('messageCreate', async (message) => {
    // Ensure the bot doesn't reply to its own messages or DMs
    if (message.author.bot || !message.guild) return;

    const userMention = `<@${message.author.id}>`; // Tag the user who sent the message

    // Respond to "hi"
    if (message.content.toLowerCase() === 'hi') {
        try {
            await message.channel.send(`Hey, what\'s up ${userMention}?`); // Tag the user in the response
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    // Respond to "yo"
    if (message.content.toLowerCase() === 'yo') {
        try {
            await message.channel.send(`Yo, ${userMention}! What\'s good?`);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    // Respond to "mulla"
    if (message.content.toLowerCase() === 'mulla') {
        try {
            await message.channel.send(`Talha zaquee, ${userMention}!`); // Tag the user in the response
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    // Bonus: Respond to "help"
    if (message.content.toLowerCase() === 'help') {
        try {
            await message.channel.send(
                `Hi ${userMention}, here are some commands you can try:\n- \`hi\`: Get a friendly greeting\n- \`yo\`: Casual greeting\n- \`mulla\`: Special response for "Talha zaquee"\nLet me know if you need anything else!`
            );
        } catch (error) {
            console.error('Error sending help message:', error);
        }
    }
});

// Login to Discord
client.login(DISCORD_TOKEN).catch((error) => {
    console.error('Error logging into Discord:', error);
});
