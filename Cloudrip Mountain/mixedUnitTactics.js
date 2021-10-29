const summonTypes = ['archer', 'archer', 'archer', 'archer', 'archer', 'archer', 'archer', 'soldier'];

function pickUpCoins(){
    let coin = hero.findNearest(hero.findItems());
    if (coin){
        if (coin && hero.isReady("jump") && hero.distanceTo(coin) > 10){
            hero.jumpTo(coin.pos);
        }else{
            hero.move(coin.pos);
        }
    }
}

function summonTroops(){
    let type = summonTypes[hero.built.length % summonTypes.length];
    if (hero.gold > hero.costOf(type)){
        hero.summon(type);
    }
}

function commandTroops(){
    let friends = hero.findFriends();
    for (let friend of friends){
        let enemy = friend.findNearestEnemy();
        if (enemy){
            hero.command(friend, "attack", enemy);
        }
    }
}

while(true) {
    pickUpCoins();
    summonTroops();
    commandTroops();
}
