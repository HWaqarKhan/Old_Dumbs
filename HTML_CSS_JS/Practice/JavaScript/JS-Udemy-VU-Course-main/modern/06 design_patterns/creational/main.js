// Constructor
const person = {};

const person2 = Object.create(Object.prototype);

const person3 = new Object();

person.firstName = "Ali";

person['lastName'] = "Imran";

Object.defineProperty(person, 'age', {
   value: '30',
   enumerable: true,
   writable: true,
    configurable: true
});
Object.defineProperties(person2, {
    gender: {
        value: 'Male',
        enumerable: false,
        writable: false,
        configurable: true
    },
    height: {
        value: '5.9',
        enumerable: false,
        writable: true,
        configurable: true
    }
});
person2.toString = function () {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.gender;
};
console.log(person2.toString());