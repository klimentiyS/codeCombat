while(true) {
    let pender = hero.findNearest(hero.findFriends());
    if (pender){
        hero.move(pender.pos);
    }
}
