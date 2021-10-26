while(hero.gold < 80) {
    let coin = hero.findNearestItem();
    if (coin){
        hero.move(coin.pos);
    }
}

for (let i = 0; i < 4; i++){
    hero.summon("soldier");
}

let points = [];
points[0] = {'x': 13, 'y': 73};
points[1] = {'x': 51, 'y': 73};
points[2] = {'x': 51, 'y': 53};
points[3] = {'x': 90, 'y': 53};

let friends = hero.findFriends();

for (let j = 0; j < friends.length; j++){
    let friend = friends[j];
    let point = points[j];
    hero.command(friend, "move", point);
}
