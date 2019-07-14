const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(2, 3, 1000));

// arguments object - no longer bound with arrow functions

const add1 = (a, b) => {
    // this line will cause an error
    // console.log(arguments);
    return a + b;
};

console.log(add1(2, 3));

// this keyword - longer bound

const user = {
    name: 'Mahad',
    cities: ['Islamabad', 'Rawalpindi'],
    // new syntax to write a function introduced in ES6
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply())