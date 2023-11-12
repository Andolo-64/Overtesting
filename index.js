require("dotenv").config();
require("axios");
const { Client, IntentsBitField } = require("discord.js");
const { stringify } = require("nodemon/lib/utils");
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log("I am online and full of errors, sincerly", `${c.user.username}`);
});

client.on('guildCreate', async (guild) => {
  guild.commands.set(commands).then(() =>
    console.log(`Commands deployed in guild ${guild.name}!`));
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content == "hello") {
    await message.reply(":wave:");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hey") {
    return await interaction.reply("hey!");
  }

  if (interaction.commandName === "ping") {
    return await interaction.reply("pong!");
  }
});

client.login(process.env.token);

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
  {
    name: "ping",
    description: "Pong!",
  }
];