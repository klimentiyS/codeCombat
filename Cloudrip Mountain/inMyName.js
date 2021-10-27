function indexChest(word, letter){
    for (let i = 0; i < word.length; i++){
        if (word[i] === letter){
            return i;
        }
    }
    return -1;
}

let findLetter = 'z';
let friend = hero.findByType("thoktar")[0];
let chestIndex = indexChest(friend.id, findLetter); 

hero.moveXY(16 + chestIndex * 8, 36);
