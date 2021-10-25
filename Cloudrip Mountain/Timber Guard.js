while(true) {
    let coin = hero.findNearestItem();
    if (coin){
        hero.move(coin.pos);
    }
    if (hero.gold > hero.costOf("soldier")){
        hero.summon("soldier");
    }
    let friends = hero.findFriends();
    for(let i = 0; i < friends.length; i++){
        let friend = friends[i];
        if (friend.type === 'soldier'){
            let enemy = friend.findNearestEnemy();
            if (enemy){
                hero.command(friend, "attack", enemy);
            }else{
                hero.command(friend, "move", {'x': 72, 'y': 45});
            }
        }
        
    }
}
