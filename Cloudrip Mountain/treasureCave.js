hero.buildXY("fire-trap", 64, 44);
hero.wait(0.4);
hero.moveXY(68, 12);
hero.moveXY(44, 8);
hero.moveXY(16, 33);
while(true) {
    let item = hero.findNearestItem();
    if (item){
        hero.move(item.pos);
    }
    break;
}
hero.moveXY(68, 12);
