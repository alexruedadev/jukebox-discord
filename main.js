const Bot = require("./src/models/Bot");
const config = require("./config");
require('dotenv').config();

const bot = new Bot();

bot.start(process.env.TOKEN || config.token);