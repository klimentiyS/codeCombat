while (true) {
    let gem = hero.findNearestItem();
    if (gem) {
        let clear = hero.isPathClear(hero.pos, gem.pos);
        if (clear) {
            hero.move(gem.pos);
        } else {
            hero.move({
                'x': 40,
                'y': 35
            });
        }
    }
}
