let points = [];
points[0] = {
    'x': 33,
    'y': 26
};
points[1] = {
    'x': 33,
    'y': 42
};
points[2] = {
    'x': 47,
    'y': 42
};
points[3] = {
    'x': 47,
    'y': 26
};
while (hero.gold < 80) {
    let coin = hero.findNearestItem();
    if (coin) {
        hero.move(coin.pos);
    }
}
for (let i = 0; i < 4; i++) {
    hero.summon("soldier");
}
while (true) {
    let friends = hero.findFriends();
    for (let j = 0; j < friends.length; j++) {
        let friend = friends[j];
        let point = points[j];
        let enemy = friend.findNearestEnemy();
        if (enemy && enemy.team === 'ogres' && friend.distanceTo(enemy) < 5) {
            hero.command(friend, "attack", enemy);
        } else {
            hero.command(friend, "move", point);
        }
    }
}
