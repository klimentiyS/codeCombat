var gems = hero.findItems();

while (hero.pos.x < 20) {
	hero.move({'x': 20, 'y': 35});
}
while (hero.pos.x < 25) {
	var gem0 = gems[0];
	hero.move(gem0.pos);
}
while(hero.pos.x < 30) {
    hero.move({'x': 30, 'y': 35});
}
while(hero.pos.x < 35) {
    hero.move(gems[1].pos);
}
while(hero.pos.x < 40) {
    hero.move({'x': 40, 'y': 35});
}
while(hero.pos.x < 45) {
    hero.move(gems[2].pos);
}
while(hero.pos.x < 50) {
    hero.move({'x': 50, 'y': 35});
}
while(hero.pos.x < 55) {
    hero.move(gems[3].pos);
}
