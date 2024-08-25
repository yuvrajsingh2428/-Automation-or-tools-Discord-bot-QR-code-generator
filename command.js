// Used to create your commands

import {REST, Routes} from "discord.js"
import dotenv from "dotenv"

//Load environment variable
dotenv.config();

//these are commands
const commands = [
    {
        name: "create",
        description: "Create a new short URL",
    },
]
 //process of making commands
const rest = new REST({ version:"10"}).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands('1276837707712036907'), { body: commands,})

        console.log("Successfully reloaded application (/) commands.");
    } catch(error) {
        console.log(error);
        
    }
}) ();