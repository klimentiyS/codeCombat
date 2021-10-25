function dieOrGoAway(unit, index){
    let enemy = unit.findNearestEnemy();
    if (enemy && index < 2){
        hero.command(unit, "move", {'x': 79, 'y': 51});
    }else{
        hero.command(unit, "move", {'x': unit.pos.x - 2, 'y': unit.pos.y - 1});
    }
}

while(true) {
    let friends = hero.findFriends();
    for(let i = 1; i < friends.length; i++){
        dieOrGoAway(friends[i], i);
    }
}
