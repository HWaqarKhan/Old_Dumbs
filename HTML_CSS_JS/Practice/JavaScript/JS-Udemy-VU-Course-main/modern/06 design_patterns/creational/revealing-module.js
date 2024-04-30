function Person(id, firstName, lastName, gender) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

const PersonModule = function () {
    let persons = [];
    let counter = 0;
    function add(person) {
        persons[counter] = person;
        counter++;
    }
    function print() {
        persons.forEach(person => {
            console.log(person);
        });
    }
    function size() {
        return counter;
    }
    function find(id) {
        return persons.filter(f => f.id === id);
    }
    return {
        add: add,
        print: print,
        find: find

    }


}();
PersonModule.add(new Person(1, 'Ali', 'Imran', 'Male'));

PersonModule.add(new Person(2, 'Aamir', 'Sohail', 'Male'));
PersonModule.print();
//console.log(PersonModule.persons);

