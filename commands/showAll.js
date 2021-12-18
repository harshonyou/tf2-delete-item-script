// Imports
const SteamUser = require('steam-user'); // connection to steam
const TeamFortress2 = require('tf2'); // connection to tf2 inventory
const chalk = require("chalk");
var path = require('path');

require('dotenv').config()

let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var items = require('tf2-item-list')
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

tf2.on('backpackLoaded', () => {
    collectingLoader.stop();
    (async () => {
        console.log(chalk.underline(chalk.green("ItemID")), "\t\t:\t", chalk.underline(chalk.yellow("ItemName")));
    Object.values(tf2.backpack).forEach(val => {
        console.log(chalk.greenBright(val['id']), "\t:\t", chalk.yellowBright(items.getItemName(val['def_index'])));
    });
    user.logOff();
    loggingOffLoader = loader.loader("Logging Out", 2, 100);
    })();
});

user.on('disconnected', () => {
    loggingOffLoader.stop();
    console.log(chalk.redBright("Logged Out!\n"));
    process.exit(1);
});