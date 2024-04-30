/* function sum(n1,n2) {
    return n1 + n2;
 }

 print();
*/

const print = () => console.log('Hello Arrow Function in JS');
const sum = (n1,n2) => n1 + n2;

const mult = (n1,n2) => {
    return n1 * n2;
}


const parent = {
    mom_name: "Samantha Quinn",

    mother: () => {
        return this.mom_name + 'is my mother.';
    },
};
console.log(parent.mother());
