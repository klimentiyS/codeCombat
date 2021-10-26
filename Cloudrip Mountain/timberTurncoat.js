while (true) {
    let coin = hero.findNearestItem();
    if (coin) {
        hero.move(coin.pos);
    }
    if (hero.gold > hero.costOf("soldier")) {
        hero.summon("soldier");
    }
    let soldiers = hero.findFriends();
    for (let i = 0; i < soldiers.length; i++) {
        let soldier = soldiers[i];
        if (soldier.type === 'soldier') {
            let enemy = soldier.findNearestEnemy();
            if (enemy) {
                hero.command(soldier, "attack", enemy);
                if (soldier.health < 100) {
                    hero.command(soldier, "move", {
                        'x': 34,
                        'y': 43
                    });
                }
            } else {
                hero.command(soldier, "move", {
                    'x': 69,
                    'y': 48
                });
            }
        }
    }
}
