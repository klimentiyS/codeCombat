function findSouthenEnemy(array){
    let arr = [];
    for (let a of array){
        if (a.pos.y < hero.pos.y){
            arr.push(a);
        }
    }
    return arr;
}

while(true) {
    let friends = hero.findFriends();
    let enemies = hero.findEnemies();
    if (findSouthenEnemy(enemies).length > friends.length){
        hero.summon("soldier");
    }
}
