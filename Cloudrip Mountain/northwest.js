function wordInText(sentence, word){
    if (sentence.indexOf(word) > 0){
        return true;
    }
    return false;
}
function onHear(event) {
    // Если во фразе содержится "west", питомцу надо бежать влево.
    if (wordInText(event.message, "west")) {
        pet.moveXY(pet.pos.x - 28, pet.pos.y);
    }
    // Если во фразе содержится "north", питомцу надо бежать вверх.
    else if (wordInText(event.message, "north")) {
        pet.moveXY(pet.pos.x, pet.pos.y + 24);
    } 
    // Иначе питомец должен принести зелье.
    else {
        var potion = pet.findNearestByType("potion");
        if (potion) {
            pet.fetch(potion);
        }
    }
}

pet.on("hear", onHear);
