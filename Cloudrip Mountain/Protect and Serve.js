const defends = [];
defends[0] = {'x': 112, 'y': 57};
defends[1] = {'x': 112, 'y': 52};
defends[2] = {'x': 63, 'y': 79};
defends[3] = {'x': 68, 'y': 79};
defends[4] = {'x': 10, 'y': 67};
defends[5] = {'x': 10, 'y': 62};
defends[6] = {'x': 62, 'y': 5};
defends[7] = {'x': 67, 'y': 5};

let soldiers = [];
let friends = hero.findFriends();
for (let i = 0; i < friends.length; i++){
    let friend = friends[i];
    if (friend.type === "soldier"){
        soldiers.push(friend);
    }else{
        defends.push(friend);
    }
}

while(true) {
    for (let j = 0; j < soldiers.length; j++){
        let soldier = soldiers[j];
        let defend = defends[j];
        hero.command(soldier, "defend", defend);
    }
}



