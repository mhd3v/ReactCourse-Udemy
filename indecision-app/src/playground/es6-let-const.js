var nameVar = 'mahad';
var nameVar = '123';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jen1';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName =  'Hal';
    return petName;
}

getPetName();
// Below line will cause an error because all var, let and const are function scoped
// console.log(petName);

// Block scoping

var fullName = 'Mahad Amir';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// if var is used, then its value can be accessed outside the if block 
// since it is not block-scoped, whereas both let and const are
console.log(firstName);