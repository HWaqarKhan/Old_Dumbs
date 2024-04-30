
class Person {
    constructor(id,firstName, lastName, gender) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

class PersonModule  {
    persons = [];
    counter = 0;
    add (person) {
        this.persons[this.counter] = person;
        this.counter++;
    }

    print() {
        this.persons.forEach(item  => console.log(item.firstName));
    }

    size () {
        return this.counter;
    }

    find (id) {
        return this.persons.filter(v => {
            return v.id === id;
        });
    }
};

var personModule = new PersonModule();
personModule.add(new Person(1,'Aamir', 'Ali', 'Male'));
personModule.add(new Person(2, 'Maryam', 'Ali', 'Female'));
console.log(
personModule.find(2));
