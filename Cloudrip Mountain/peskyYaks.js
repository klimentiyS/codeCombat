function filter(array, unit) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        let enemy = array[i];
        if (enemy.type !== unit) {
            arr.push(enemy);
        }
    }
    return arr;
}
while (true) {
    let enemies = hero.findEnemies();
    let enemy = filter(enemies, 'sand-yak');
    let nearest = hero.findNearest(enemy);
    if (nearest) {
        while (nearest.health > 0) {
            hero.attack(nearest);
        }
    }
}
