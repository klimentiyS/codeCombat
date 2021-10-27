function summonSoldiers(){
    if (hero.gold > hero.costOf("soldier")){
        hero.summon("soldier");
    }
}

function pickUpCoins(){
    let coin = hero.findNearestItem();
    if (coin){
        hero.move(coin.pos);
    }
}

function commandSoldiers(){
    let soldiers = hero.findByType("soldier");
    for (let i = 0; i < soldiers.length; i++){
        let soldier = soldiers[i];
        let enemy = soldier.findNearestEnemy();
        if (enemy){
            hero.command(soldier, "attack", enemy);
        }
    }
}

while(true) {
    summonSoldiers();
    pickUpCoins();
    commandSoldiers();
}
