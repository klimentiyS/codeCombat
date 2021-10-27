var doctor = hero.findByType("paladin")[0];
var mage = hero.findByType("pixie")[0];
var helper = hero.findByType("peasant")[0];
var soldiers = hero.findByType("soldier");

let doctorPatients = [];
let magePatients = [];
let helperPatients = [];

for (let soldier of soldiers){
    if (soldier.maxSpeed < 6){
        magePatients.push(soldier);
    }else if (soldier.health < soldier.maxHealth / 2){
        doctorPatients.push(soldier);
    }else{
        helperPatients.push(soldier);
    }
}

doctor.patients = doctorPatients;
mage.patients = magePatients;
helper.patients = helperPatients;
