while(true) {
    let friends = hero.findFriends();
    let mostHealth = null;
    let maxHealth = 0;
    for (let i = 0; i < friends.length; i++){
        let friend = friends[i];
        let enemies = friend.findEnemies();
        for (let j = 0; j < enemies.length; j++){
            let enemy = enemies[j];
            if (enemy.health > maxHealth){
                mostHealth = enemy;
                maxHealth = enemy.health;
            }
        }
        if(mostHealth){
            hero.command(friend, "attack", mostHealth);
        }
    }
}
