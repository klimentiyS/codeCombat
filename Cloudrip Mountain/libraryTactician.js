// Хашбаум попала в засаду огров!
// Она занята исцелением своих солдат, так что прикажи им сражаться!
// Огры вызовут подкрепление, если посчитают, что смогут добраться до Хашбаум или лучников. Поэтому выстрой их в оборонительное кольцо!

var archerTarget = null;

// Солдаты формируют круг и защищаются.
function commandSoldier(soldier, soldierIndex, numSoldiers) {
    var angle = Math.PI * 2 * soldierIndex / numSoldiers;
    var defendPos = {x: 41, y: 40};
    defendPos.x += 10 * Math.cos(angle);
    defendPos.y += 10 * Math.sin(angle);
    hero.command(soldier, "defend", defendPos);
}

// Найди самого сильного врага (с наибольшим здоровьем)
// Эта функция что-то возвращает! Когда ты её вызываешь, то получаешь назад некоторое значение.
function findStrongestTarget() {
    var mostHealth = 0;
    var bestTarget = null;
    var enemies = hero.findEnemies();
    for (let i = 0; i < enemies.length; i++){
        let enemy = enemies[i];
        if (enemy.health > mostHealth){
            bestTarget = enemy;
            mostHealth = enemy.health;
        }
    }
    // Определи, у кого из врагов наибольший уровень здоровья, и присвой это значение переменной `bestTarget`.
    
    // Концентрируй огонь лучников на одном противнике, когда нападает большой огр.
    if (bestTarget && bestTarget.health > 15) {
        return bestTarget;
    } else {
        return null;
    }
}


// Если у врага `strongestTarget` больше 15 единиц здоровья, атакуй его. Иначе атакуй ближайшего врага.
function commandArcher(archer) {
    var nearest = archer.findNearestEnemy();
    if(archerTarget) {
        hero.command(archer, "attack", archerTarget);
    } else if(nearest) {
        hero.command(archer, "attack", nearest);
    }
}


while(true) {
    // Если враг `archerTarget` повержен или не существует, найди нового.
    if(!archerTarget || archerTarget.health <= 0) {
        // Установи в переменную `archerTarget` результат, который возвращает функция `findStrongestTarget()`
        archerTarget = findStrongestTarget();
    }
    var friends = hero.findFriends();
    var soldiers = hero.findByType("soldier");
    // Создай переменную, указывающую на твоих лучников.
    let archers = hero.findByType("archer");
    for(var i=0; i < soldiers.length; i++) {
        var soldier = soldiers[i];
        commandSoldier(soldier, i, soldiers.length);
    }
    // используй функцию `commandArcher()` для управления своими лучниками
    for (let j = 0; j < archers.length; j++){
        let archer = archers[j];
        commandArcher(archer);
    }
}
