// Imports
const SteamUser = require('steam-user'); // connection to steam
const TeamFortress2 = require('tf2'); // connection to tf2 inventory
const chalk = require('chalk');
var path = require('path');

require('dotenv').config();

let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var loader = require(path.join(__dirname, 'loader.js'));

const logOnOptions = {
    accountName: process.env.ACCOUNT_NAME,
    password: process.env.ACCOUNT_PASSWORD,
    rememberPassword: true,
    machineName: 'god'
};

user.logOn(logOnOptions);

user.on('loggedOn', () => {
    collectingLoader = loader.loader("Collecting Data", 1, 100);
    user.setPersona(SteamUser.EPersonaState.Online);
    user.gamesPlayed([440]);
});

tf2.on('accountLoaded', () => {
    collectingLoader.stop();
    console.log(chalk.blue(`You Are Having ${chalk.magenta(tf2.premium == false ? "Normal" : "Premiun")} Account With Max Capacity Of ${chalk.magenta(tf2.backpackSlots)} Items`));
    user.logOff();
    loggingOffLoader = loader.loader("Logging Out", 2, 100);
});

tf2.on('backpackLoaded', () => {
    collectingLoader.stop();
    console.log(chalk.blue(`Currently You Have Got ${chalk.magenta(tf2.backpack.length)} Items`));
});

user.on('disconnected', () => {
    loggingOffLoader.stop();
    console.log(chalk.redBright("Logged Out!\n"));
    process.exit(1);
});