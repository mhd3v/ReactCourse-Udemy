const square = function(x){
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(2));

console.log(squareArrow(2));

const getFirstName = (name) => {
    return name.split(' ')[0]
};

const getFirstNameShortHandSyntax = (name) => name.split(' ')[0];

console.log(getFirstName('Mahad Amir'));
console.log(getFirstNameShortHandSyntax('Mahad Amir'));