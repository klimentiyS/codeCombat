// Теперь у тебя есть кольцо цветов! Ты можешь:
// `toggleFlowers(true/false)` - включить или выключить цветы.
// `setFlowerColor("random")` - также доступны цвета "pink", "red", "blue", "purple", "yellow" и "white".

// Вот некоторые функции для рисования фигур:
// х, у - центр фигуры
// size - размер фигуры (радиус или длина сторон)
hero.drawCircle = function(x, y, size) {
    var angle = 0;
    hero.toggleFlowers(false);
    while (angle <= Math.PI * 2) {
        var newX = x + (size * Math.cos(angle));
        var newY = y + (size * Math.sin(angle));
        hero.moveXY(newX, newY);
        hero.toggleFlowers(true);
        angle += 0.1;
    }
};

hero.drawSquare = function(x, y, size) {
    hero.toggleFlowers(false);
    var cornerOffset = size / 2;
    hero.moveXY(x - cornerOffset, y - cornerOffset);
    hero.toggleFlowers(true);
    hero.moveXY(x + cornerOffset, y - cornerOffset);
    hero.moveXY(x + cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y + cornerOffset);
    hero.moveXY(x - cornerOffset, y - cornerOffset);
};

var redX = {x: 28, y: 36};
var whiteX = {x: 44, y: 36};

// Выбери цвет.
hero.setFlowerColor("blue");
// Нарисуй круг размером 10 на красной отметке X.
hero.drawCircle(redX.x, redX.y, 10);
// Измени цвет!
hero.setFlowerColor("red");
// Нарисуй квадрат размером 10 на белой отметке X.
hero.drawSquare(whiteX.x, whiteX.y, 10);
// Теперь экспериментируй, рисуя всё, что угодно!
