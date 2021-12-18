const fs = require('fs');

let rawdataItems = fs.readFileSync('data.json');
let dataItems = JSON.parse(rawdataItems);

exports.getItemName = function(itemID) {
    return dataItems[itemID];
}