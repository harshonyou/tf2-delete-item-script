const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');
const chalk = require("chalk");

require('dotenv').config()

let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var items = require('../tf2Items')
var loader = require('../loader')

const logOnOptions = {
    accountName: process.env.ACCOUNT_NAME,
    password: process.env.ACCOUNT_PASSWORD,
    rememberPassword: true,
    machineName: 'god'
};

user.logOn(logOnOptions);

user.on('loggedOn',() =>{
    collectingLoader = loader.loader("Collecting Data", 1, 100);
    user.setPersona(SteamUser.EPersonaState.Online);
    user.gamesPlayed([440]);
});

tf2.on('backpackLoaded',() =>{
    collectingLoader.stop();
    console.log(chalk.underline(chalk.red("ItemID")), "\t\t:\t", chalk.underline(chalk.magenta("ItemName")));
    Object.values(tf2.backpack).forEach(val => {
        console.log(chalk.redBright(val['id']), "\t:\t", chalk.magentaBright(items.getItemName(val['def_index'])));
    });
    user.logOff();
});

user.on('disconnected', ()=>{
    console.log(chalk.redBright("Logged Out!"));
    process.exit(1);
})