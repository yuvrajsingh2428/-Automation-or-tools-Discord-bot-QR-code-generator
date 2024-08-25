import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';


dotenv.config()
 
const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent,
], 
});

client.on("messageCreate", (message) => {
    // console.log(message.content); for testing that we are recieving the message

    if(message.author.bot) return;  // Prevent bot from replying to its own message

    if(message.content.startsWith("create ")) {
        const url = message.content.split("create")[1];  // Extract URL after "create "

        // Check if URL is not empty
        if(url){
            return message.reply ({
                content:"Generating Short ID for " + url,
            })
        }
        else {
            return message.reply({
                content: "Please provide a valid URL after the command"
            })
        }
    }
    // Default reply if no specific command is detected
    message.reply({
        content: 'Hi From Bot',
    })
    
})
//creating a listener for the command (/ping) to respond


// client.on('interactionCreate', interaction => {   
//     console.log(interaction); 
//     interaction.reply('Pong!')
    
// }) 

//another way of doing 
// client.on('interactionCreate', interaction => {
//     if (!interaction.isCommand()) return;  // Ensure it's a command interaction

//     if (interaction.commandName === 'ping') {
//         interaction.reply('Pong!');
//     }
// });



client.login(process.env.DISCORD_TOKEN)

