const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');
var SteamTrade = require('steam-trade');

console.log("Started");



let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var steamTrade = new SteamTrade(user);



const logOnOptions = {
    accountName: 'account name here',
    password: 'password here',
    rememberPassword: true,
    machineName: 'god'
    twoFactorCode: 'auth code here'
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
//require('showall.js');


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
/*
tf2.on('connectedToGC',() =>{
    console.log("connectedToGC");
    tf2.deleteItem(7687198320);
    tf2.deleteItem(7687198321);
    tf2.deleteItem(7687198322);
    tf2.deleteItem(7687198323);
    tf2.deleteItem(7687198324);
	
    tf2.deleteItem(6241816908);
    tf2.deleteItem(6276983184);
    tf2.deleteItem(6297670331);
    tf2.deleteItem(6325526761);
    tf2.deleteItem(6367475599);
    tf2.deleteItem(6391159571);
    tf2.deleteItem(6414044875);
    tf2.deleteItem(6456248615);
    tf2.deleteItem(6458596529);
    tf2.deleteItem(6458596530);
    tf2.deleteItem(6458596531);

    tf2.deleteItem(6714272201);
    tf2.deleteItem(6719900771);
    tf2.deleteItem(7629687048);
    tf2.deleteItem(7687198319);
    console.log("Deleted");
});
*/


