// Imports
const SteamUser = require('steam-user'); // connection to steam
const TeamFortress2 = require('tf2'); // connection to tf2 inventory
const chalk = require("chalk");
var path = require('path');

require('dotenv').config();

let user = new SteamUser();
let tf2 = new TeamFortress2(user);
let inquirer = require('inquirer')
var loader = require(path.join(__dirname, 'loader.js'));

// Recursive Async Function For ItemID Input(s)
const collectInputs = async (inputs = []) => {
    const prompts = [
        {
            type: 'input',
            name: 'inputValue',
            message: 'Enter item ID: '
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Wants to delete another item? ',
            default: true
        }
    ];

    const { again, ...answers } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return again ? collectInputs(newInputs) : newInputs;
};

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

tf2.on('connectedToGC', () => {
    collectingLoader.stop();
	(async () => {
        console.log(chalk.underline(chalk.bold(chalk.magentaBright("Make Sure You Note The Correct ItemID From 'Show Your Inventory' Option."))))
        const inputs = await collectInputs();
        for (let index = 0; index < inputs.length; index++) {
            // tf2.deleteItem(inputs[index]['inputValue']);
            // console.log(inputs[index]['inputValue']);
        }
        console.log(chalk.magenta(`Deleted ${inputs.length} Selected Items!`));
        user.logOff();
        loggingOffLoader = loader.loader("Logging Out", 2, 100);
    })()
});


user.on('disconnected', () => {
    loggingOffLoader.stop();
    console.log(chalk.redBright("Logged Out!\n"));
    process.exit(1);
});