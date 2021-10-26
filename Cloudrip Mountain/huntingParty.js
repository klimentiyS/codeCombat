function soldiers(unit, index){
    let enemy = unit[index].findNearestEnemy();
    if (enemy){
        hero.command(unit[index], "attack", enemy);
    }else{
        hero.command(unit[index], "move", {'x': unit[index].pos.x + 0.5, 'y': unit[index].pos.y});
    }
}

while(true) {
    let friends = hero.findFriends();
    for (let i = 0; i < friends.length; i++){
        soldiers(friends, i);
    }
    let enemy = hero.findNearestEnemy();
    if (enemy ){
        hero.attack(enemy);
    }else{
        hero.moveXY(85, 46);
    }
}
