const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');
var SteamTrade = require('steam-trade');

console.log("Started");



let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var steamTrade = new SteamTrade(user);



const logOnOptions = {
    accountName: 'dragoonfirestormar',
    password: 'fuckujack',
    rememberPassword: true,
    machineName: 'god'
};


user.logOn(logOnOptions);


user.on('loggedOn',() =>{
    console.log("logged on");
    user.setPersona(SteamUser.EPersonaState.Online);
    user.gamesPlayed([440]);
});

// remove the command line to print all the Items with their ID's 
// you will be requiring ID's to delete spesific items
// 'showall.js' will print all the Items with their respecting ID's
// if nothing works, just copy and paste codes of showall.js below 
// tf2.on('backpackLoaded',() =>{
//     console.log("LOADED");
//     console.log(tf2.backpack);
// });


// remove the command line to delete all the creates from you library
// remember it will delete every creates, do not use this if you are not sure what you are doing
// or if you do not want to rish accidently delete any item
// if nothing works, just copy and paste codes of deleteall.js below
//require('deleteall.js');



// remove the command line below to delete spesific items
// to delete any spesific item you first need the ID
// to get the ID's first run 'showall.js' and then target spespifc ID 
// like tf2.deleteItem(SPESIFIC_ID);
// it will delete that item
// to delete multiple items in single go, use that line again and again till you used all the ID's

tf2.on('connectedToGC',() =>{
    console.log("connectedToGC");
    tf2.deleteItem(4000939270);
    tf2.deleteItem(4000939269);
    tf2.deleteItem(4000939268);
    tf2.deleteItem(4000939267);
    tf2.deleteItem(4000939266);

    tf2.deleteItem(4000939263);
    tf2.deleteItem(4000939264);
    tf2.deleteItem(4000939262);
    tf2.deleteItem(4000939261);
    tf2.deleteItem(4000939260);

    tf2.deleteItem(4000939259);
    tf2.deleteItem(4000939258);
    tf2.deleteItem(4000939257);
    tf2.deleteItem(4000939256);
    tf2.deleteItem(4000939255);

    tf2.deleteItem(4000939253);
    tf2.deleteItem(4000939252);
    tf2.deleteItem(4000939251);
    tf2.deleteItem(4000939250);
	
    console.log("Deleted");
});



