const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');
const chalk = require("chalk");

require('dotenv').config()

let user = new SteamUser();
let tf2 = new TeamFortress2(user);
let inquirer = require('inquirer')
var items = require('../tf2Items')
var loader = require('../loader')

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

tf2.on('connectedToGC',() =>{
    collectingLoader.stop();
    console.log("connectedToGC");
    // tf2.deleteItem(4000939270);
	(async () => {
        const inputs = await collectInputs();
        for (let index = 0; index < inputs.length; index++) {
            // tf2.deleteItem(4000939270);
            // console.log(inputs[index]['inputValue']);
        }
        console.log(chalk.magenta("Deleted Selected Items!"));
        user.logOff();
    })()
    // console.log("Deleted");
    
});


user.on('disconnected', ()=>{
    console.log(chalk.redBright("Logged Out!"));
    process.exit(1);
})