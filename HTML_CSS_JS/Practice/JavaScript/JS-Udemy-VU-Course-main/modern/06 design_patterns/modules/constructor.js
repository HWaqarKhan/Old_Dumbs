
    // This creates a new empty Object

  /*  var Person = {};
    Person.firstName  = "Ali";
    Person.lastName = "Imran";
    console.log(Person);*/
    // This creates a new empty Object

   // var Person = Object.create(Object.prototype);

     //var p =   Person();
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.toString = function () {
            return this.firstName + " " + this.lastName;
        }
    }
    var p1 = new Person("Ali", "imran");
    var p2 = new Person("Aamir", "Yaqoob");
    console.log(p2.toString());
    class Car {
        constructor(model, year, miles) {
            this.model = model;
            this.year = year;
            this.miles = miles;
        }

        toString() {
            return `${this.model} has done ${this.miles} miles`;
        }
    }
    let civic = new Car('Honda Civic', 2009, 20000);
    let mondeo = new Car('Ford Mondeo', 2010, 5000);

    console.log(civic.toString());
    console.log(mondeo.toString());