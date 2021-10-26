function findSoldierOffset(soldiers, i) {
    var soldier = soldiers[i];
    var angle = i * 360 / soldiers.length;
    return radialToCartesian(5, angle);
}

function radialToCartesian(radius, degrees) {
    var radians = Math.PI / 180 * degrees;
    var xOffset = radius * Math.cos(radians);
    var yOffset = radius * Math.sin(radians);
    return {x: xOffset, y: yOffset};
}

var peasant = hero.findByType("peasant")[0];
let soldiers = hero.findByType("soldier");
while(true) {
    for (let i = 0; i < soldiers.length; i++){
        let offset = findSoldierOffset(soldiers, i);
        let x = offset.x + peasant.pos.x;
        let y = offset.y + peasant.pos.y;
        hero.command(soldiers[i], "move", {'x': x, 'y': y});
    }
    hero.move({'x': hero.pos.x + 0.2, 'y': hero.pos.y});
}
