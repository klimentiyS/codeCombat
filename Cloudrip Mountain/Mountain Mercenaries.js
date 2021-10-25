while (true) {
    let coin = hero.findNearestItem();
    if (coin) {
        hero.move(coin.pos);
    }
    if (hero.gold > 100 && hero.gold > hero.costOf("soldier")){
        hero.summon("soldier");
    }
    let enemy = hero.findNearestEnemy();
    if (enemy){
        let soldiers = hero.findFriends();
        let i = 0;
        while(i < soldiers.length) {
            let soldier = soldiers[i];
            i++;
            hero.say("Attack!");
            hero.command(soldier, "attack", enemy);
        }
        while(enemy.health > 0) {
            if (hero.isReady('throw') && hero.distanceTo(enemy) < hero.throwRange){
                hero.throw(enemy);
            }
            hero.attack(enemy);
        }
    }
}
