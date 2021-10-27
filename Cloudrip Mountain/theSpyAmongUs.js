function findSpy(name, letter){
    for (let l of name){
        if (l === letter){
            return true;
        }
    }
    return false;
}

let letter = 'z';
let friends = hero.findFriends();
for (let friend of friends){
    if (findSpy(friend.id, letter)){
        hero.say(friend.id + ' is a spy!');
    }else{
        hero.say(friend.id + ' is a friend!');
    }
}
