function findLetterInWord(word, letter){
    for (let l of word){
        if (l === letter){
            return true;
        }
    }return false;
}

let friend = hero.findFriends()[0];
let safeLetter = friend.safeLetter;
while(true) {
    let enemies = hero.findEnemies();
    for (let enemy of enemies){
        if (findLetterInWord(enemy.id, friend.safeLetter)){
            while(enemy.health > 0){
                hero.attack(enemy);
            }
        }
    }
}
