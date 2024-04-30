const person = {
  firstName: 'Ali',
  lastName: 'Imran',
  age: 36,
  email: 'aliaimran@somemail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'Ali', age: 30},
  {name: 'Imran', age: 23},
  {name: 'Maryam', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}