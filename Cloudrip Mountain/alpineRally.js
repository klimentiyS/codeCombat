function runForestRun() {
    let enemy = hero.findNearestEnemy();
    if (enemy && hero.canCast("haste", hero)) {
        hero.cast('haste', hero);
    }
    else if (enemy.type === 'scout' && hero.isReady("mana-blast") && hero.distanceTo(enemy) < 10) {
        hero.manaBlast();
        hero.resetCooldown("haste");
    }
    hero.move({
        'x': 273,
        'y': 37
    });
}

while(true) {
    runForestRun();
}
