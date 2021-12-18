var CLI = require('clui'),
    Spinner = CLI.Spinner;
 
var countdown = new Spinner('Exiting to main menu in 3 seconds...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
    countdown.start();
    var number = 4;
    setInterval(function () {
        number--;
        countdown.message('Exiting to main menu in ' + number + ' seconds...  ');
        if (number === 0) {
            countdown.stop();
        }
    }, 1000);