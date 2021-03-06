// Этот уровень знакомит с оператором `%`, определяющим остаток от деления.
// `a % b` возвращает остаток от деления `a` на `b`
// Индекс, превышающий длину массива, может применяться для циклического перебора.

var defendPoints = [{"x": 35, "y": 63},{"x": 61, "y": 63},{"x": 32, "y": 26},{"x": 64, "y": 26}];

var summonTypes = ["soldier","soldier","soldier","soldier","archer","archer","archer","archer"];

// Ты начинаешь с 360 золотыми, создай отряд из солдат и лучников.
// `this.built` является массивом из уже созданных юнитов.
// Здесь мы используем `this.built.length % summonTypes.length`, чтобы циклически перебрать массив `summonTypes`
function summonTroops() {
    var type = summonTypes[hero.built.length % summonTypes.length];
    if(hero.gold >= hero.costOf(type)) {
        hero.summon(type);
    }
}

function commandTroops() {
    var friends = hero.findFriends();
    for(var friendIndex=0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        let defendPoint = defendPoints[friendIndex % defendPoints.length];
        hero.command(friend, "defend", defendPoint);
        // Используй `%`, чтобы циклически перебрать `defendPoints` по индексу `friendIndex`
        // Прикажи своим подчинённым защищать `defendPoint`
    }
}

while(true) {
    summonTroops();
    commandTroops();
}
