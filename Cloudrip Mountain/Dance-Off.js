while(true) {
    let friends = hero.findFriends();
    let friend = friends[6];
    if (friend){
        hero.move({'x': friend.pos.x, 'y': friend.pos.y - 6});
    }
}
