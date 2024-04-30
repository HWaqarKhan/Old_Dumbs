function Person(id, firstName, lastName, gender) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
const PersonModule = function() {
    let persons = [];
    let counter = 0;
    return {
        add: function (person) {
            persons[counter] = person;
            counter++;
        },
        print: function () {
            persons.forEach(person => {
                console.log(person);
            });
        },
        size: function () {
            return counter;
        },
        find: function (id) {
            return persons.filter(f => f.id === id);
        }
    }

}();
PersonModule.add(new Person  (1, 'Ali', 'Imran', 'Male'));

PersonModule.add(new Person  (2, 'Aamir', 'Sohail', 'Male'));
//PersonModule.print();
console.log(PersonModule.persons);

