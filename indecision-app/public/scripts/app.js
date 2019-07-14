'use strict';

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(2, 3, 1000));

// arguments object - no longer bound with arrow functions

var add1 = function add1(a, b) {
    // this line will cause an error
    // console.log(arguments);
    return a + b;
};

console.log(add1(2, 3));

// this keyword - longer bound

var user = {
    name: 'Mahad',
    cities: ['Islamabad', 'Rawalpindi'],
    // new syntax to write a function introduced in ES6
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
