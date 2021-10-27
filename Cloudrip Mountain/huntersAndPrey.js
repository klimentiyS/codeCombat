function pickUpCoins(){
    let coin = hero.findNearestItem();
    if (coin){
        hero.move(coin.pos);
    }
}

function summonSoldiers(){
    if (hero.gold > hero.costOf("soldier")){
        hero.summon("soldier");
    }
}

function commandSoldiers(unit){
    let enemy = unit.findNearestEnemy();
    if (enemy){
        hero.command(unit, "attack", enemy);
    }
}

function commandArchers(unit){
    let enemy = unit.findNearestEnemy();
    if (enemy && unit.distanceTo(enemy) < 25){
        hero.command(unit, "attack", enemy);
    }
}

while(true) {
    pickUpCoins();
    summonSoldiers();
    let friends = hero.findFriends();
    for (let i = 0; i < friends.length; i++){
        if (friends[i].type === 'soldier'){
            commandSoldiers(friends[i]);
        }
        if (friends[i].type === 'archer'){
            commandArchers(friends[i]);
        }
    }
}
