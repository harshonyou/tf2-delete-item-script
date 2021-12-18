// Custom Loading CLI Animation
const chalk = require("chalk");
var CLI = require('clui'),
    Spinner = CLI.Spinner;

exports.loader = (init_message, loader_type, length, update_message=null) => {
    if(loader_type==1){
        animation = ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']
    } else if(loader_type==2) {
        animation = ['◜','◠','◝','◞','◡','◟']
    } else {
        animation = ['|', '/', '-', '']
    }
    var countdown = new Spinner(chalk.magenta(init_message), animation);
    countdown.start();
    var number = length;
    setInterval(function () {
    number--;
    countdown.message(chalk.magenta(init_message));
    if (number === 0) {
        countdown.stop();
    }
    }, 1000);
    return countdown
}
