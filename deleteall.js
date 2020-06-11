function deleteCrates() {
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
};
deleteCrates();