function findSubtitle(word, title){
    if (word.indexOf(title) > 0){
        return true;
    }
    return false;
}
let subtitle = 'bos';

 while(true) {
      let enemies = hero.findEnemies();
      for (let enemy of enemies){
          if (findSubtitle(enemy.id, subtitle)){
              while(enemy.health > 0) {
                  hero.attack(enemy);
              }
          }
      }
 }
