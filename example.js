const SteamUser = require('steam-user');
const TeamFortress2 = require('tf2');
var SteamTrade = require('steam-trade');

console.log("Started");



let user = new SteamUser();
let tf2 = new TeamFortress2(user);
var steamTrade = new SteamTrade(user);



const logOnOptions = {
    accountName: 'accountName',
    password: 'password',
    rememberPassword: true,
    machineName: 'god'
    //twoFactorCode: steamTotp.generateAuthCode(sharedSecret)
};



user.logOn(logOnOptions);


/*function deleteCrates() {
    var crates;
    steamTrade.loadInventory(440, 2, function(inv) {
        crates = inventory.filter(function (item) {
            return item.tags.some(function(element, index, array) {
                return element.internal_name == 'Supply Crate';
            });
        });
    });
    if(crates.length > 0) {
        user.gamesPlayed([440]);
        for(var i = 0; i < crates.length; i++) {
            tf2.deleteItem([crates[i].id]);
        }
    }
};*/


user.on('loggedOn',() =>{
    console.log("logged on");
    user.setPersona(SteamUser.EPersonaState.Online);
    user.gamesPlayed([440]);
   // console.log(tf2.backpack);
    //deleteCrates();
});

tf2.on('connectedToGC',() =>{
    console.log("connectedToGC");
    tf2.deleteItem(7687198320);
    tf2.deleteItem(7687198321);
    tf2.deleteItem(7687198322);
    tf2.deleteItem(7687198323);
    tf2.deleteItem(7687198324);
	/*
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
    tf2.deleteItem(7687198319);*/
    console.log("Deleted");
});

/*
tf2.on('backpackLoaded',() =>{
    console.log("LOADED");
    console.log(tf2.backpack);
});*/