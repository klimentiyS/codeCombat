function findWord(name, title){
    if (name.indexOf(title) > 0){
        return true;
    }
    return false;
}

let title = 'mac';
let soldiers = hero.findFriends();
for (let soldier of soldiers){
    if (findWord(soldier.id, title)){
        hero.say(soldier.id + ' be ready.');
    }
}
hero.say("ATTACK!!!");
