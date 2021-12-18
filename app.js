// Imports
const clear = require("clear"); // clears the screen
const chalk = require("chalk"); // custom CLI colors
const figlet = require("figlet"); // custom ASCII text
const inquirer = require("inquirer"); // QnA
var path = require('path'); 

// Introduction (self-calling func())
(function intro(){
    clear();
    console.log();
    console.log(
    chalk.yellowBright(
        figlet.textSync("TF2 Item", { horizontalLayout: "fitted" })
    )
    );
    console.log(
    chalk.yellowBright(
        figlet.textSync("Deletion Script", { horizontalLayout: "fitted" })
    )
    );
    console.log(
    chalk.cyanBright(
        "\n\tA Simple CLI Based Software To Remove TF2 Items"
    )
    );
    console.log(
    chalk.cyanBright(
        `\tFrom The Following Options ${chalk.greenBright(
        "Select One\n"
        )} `
    )
    );
})();

// Functionallity Selector (self-calling func() with arr of commands as signature)
(function options_selector(list) {
    inquirer.prompt([
    {
        type: 'list',
        name: 'command',
        message: 'Select one command?',
        choices: list,
    },
    ])
    .then(answers => {
        switch (answers.command) {
            case list[0]:
                    maxCapacity();
                break;
            case list[1]:
                    showAll();
                break;
            case list[2]:
                    deleteAll();
                break;
            case list[3]:
                    deleteSelected();
                break;
            case list[4]:
                    console.log(chalk.underline(chalk.red("Thank You!\n")))
                    exit()
                break;
            default:
                break;
        }
    });
})(['Check Your Backpack Slots', 'Show Your Inventory', 'Delete All Supply Crates', 'Delete Selected Item', 'Exit']);

// Event Handlers
let maxCapacity = () => {
    require(path.join(__dirname, 'commands', 'maxCapacity.js'))
}

let showAll = () => {
    require(path.join(__dirname, 'commands', 'showAll.js'))
}

let deleteAll = () => {
    require(path.join(__dirname, 'commands', 'deleteAll.js'))
}

let deleteSelected = () => {
    require(path.join(__dirname, 'commands', 'deleteSelective.js'))
}

let exit = () => {
    process.exit(1)
} 