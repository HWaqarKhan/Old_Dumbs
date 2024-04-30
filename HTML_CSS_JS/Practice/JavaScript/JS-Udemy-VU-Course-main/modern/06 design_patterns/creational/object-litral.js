function Person(id, firstName, lastName, gender) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
const PersonModule = {
    persons: [],
    counter: 0,
    add: function (person) {
        PersonModule.persons[PersonModule.counter] = person;
        PersonModule.counter++;
    },
    print: function() {
        PersonModule.persons.forEach(person => {
            console.log(person);
        });
    },
    size: function() {
        return PersonModule.counter;
    },
    find: function (id) {
        return PersonModule.persons.filter(f => f.id === id);
    }

}
PersonModule.add(new Person  (1, 'Ali', 'Imran', 'Male'));

PersonModule.add(new Person  (2, 'Aamir', 'Sohail', 'Male'));
console.log(PersonModule.persons);

