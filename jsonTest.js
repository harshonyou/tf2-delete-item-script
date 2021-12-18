const fs = require('fs');
const chalk = require("chalk");



let rawdata = fs.readFileSync('temp.json');
let data = JSON.parse(rawdata);
// console.log(data);
var items = require('./tf2Items')

console.log(chalk.underline(chalk.green("ItemID")), "\t\t:\t", chalk.underline(chalk.yellow("ItemName")));

Object.values(data).forEach(val => {
  console.log(chalk.greenBright(val['id']), "\t:\t", chalk.yellowBright(items.getItemName(val['def_index'])));
});


// console.log(data[0])

// console.log(dataItems[0])