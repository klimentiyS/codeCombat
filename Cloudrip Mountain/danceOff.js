let  friend = hero.findNearest(hero.findFriends());
let distance = friend.pos.y - hero.pos.y;
while(true) {
    if (friend){
        hero.move({'x': friend.pos.x, 'y': friend.pos.y - distance});
    }
}
