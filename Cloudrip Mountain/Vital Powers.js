function collectionCoinsAndCreateSoldiers() {
    let coin = hero.findNearestItem();
    if (coin) {
        hero.move(coin.pos);
        if (hero.gold > hero.costOf("soldier")) {
            hero.summon("soldier");
        }
    }
}

function activateSoldiers() {
    let soldiers = hero.findFriends();
    for (let j = 0; j < soldiers.length; j++) {
        let soldier = soldiers[j];
        let enemy = soldier.findNearestEnemy();
        if (enemy) {
            hero.command(soldier, "attack", enemy);
        }
    }
}

while (true) {
    collectionCoinsAndCreateSoldiers();
    activateSoldiers();
}
