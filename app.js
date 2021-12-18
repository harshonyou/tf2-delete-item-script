const clear = require("clear");
const chalk = require("chalk");
const figlet = require("figlet");
const inquirer = require("inquirer");

// const feedbackQuestions = require("./questions");

(function intro(){
    clear();
    console.log(
    chalk.yellowBright(
        figlet.textSync("TF2 Item Deletion Script", { horizontalLayout: "full" })
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
                    maxCapacity()
                break;
            case list[1]:
                    console.log(list[1])
                    showAll()
                break;
            case list[2]:
                    console.log(list[2])
                    deleteAll()
                break;
            case list[3]:
                    console.log(list[3])
                    deleteSelected()
                break;
            case list[3]:
                    console.log("Thank You!")
                    exit()
                break;
            default:
                break;
        }
    });
})(['Know Your Backpack Slot', 'Show All', 'Delete All', 'Delete Selected', 'Exit']);

let maxCapacity = () => {
    require('./commands/maxCapacity')
}

let showAll = () => {
    require('./commands/showAll')
}

let deleteAll = () => {
    console.log("deleteAll")
}

let deleteSelected = () => {
    console.log("deleteSelected")
}

let exit = () => {
    process.exit(1)
}

// feedbackQuestions();    