while (hero.time < 20) {
    let coin = hero.findNearest(hero.findItems());
    while(coin) {
        hero.move(coin.pos);
        coin = hero.findNearest(hero.findItems());
    }
}
while (hero.pos.x > 18) {
    hero.moveXY(15, 37);
    hero.buildXY("fence", 21, 38);
}
