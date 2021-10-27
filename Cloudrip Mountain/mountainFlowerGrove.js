function drawCircle(x, y, size) {
    var angle = 0;
    hero.toggleFlowers(false);
    while (angle <= Math.PI * 2) {
        var newX = x + (size * Math.cos(angle));
        var newY = y + (size * Math.sin(angle));
        hero.moveXY(newX, newY);
        hero.toggleFlowers(true);
        angle += 0.1;
    }
}
hero.setFlowerColor("blue");
drawCircle(49, 90, 10);
hero.setFlowerColor("white");
drawCircle(71, 90, 10);
hero.setFlowerColor("red");
drawCircle(93, 90, 10);
hero.setFlowerColor("yellow");
drawCircle(59, 80, 10);
hero.setFlowerColor("purple");
drawCircle(82, 80, 10);
hero.setFlowerColor("random");
drawCircle(71, 87, 35);
drawCircle(71, 87, 36);
drawCircle(71, 87, 37);

