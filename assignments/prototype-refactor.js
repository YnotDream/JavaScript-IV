/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:

class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }

  takeOff() {
    this.isFlying = true;
  }

  land() {
    this.isFlying = false;
  }
}

// Check if class constructor works
const cessna = new Airplane ({
    name: "Cessna",
})

cessna.takeOff();

console.log(cessna);

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(someFood) {
    if (this.stomach.length < 10) {
      this.stomach.push(someFood);
    }
  }

  poop() {
    this.stomach.length = 0;
  }

  toString() {
    return `${this.name}, ${this.age}`;
  }
}

// Check if class constructor works

const johnDoe = new Person ("John Doe", 25);

johnDoe.eat('Macarons');

console.log(johnDoe);

console.log(johnDoe.toString())

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor (model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  fill(gallons) {
    this.tank = this.tank + gallons;
  }

  drive(distance) {
    let gallonsNeeded = distance / this.milesPerGallon;
    if (this.tank >= gallonsNeeded) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - gallonsNeeded;
    } else {
      this.odometer = this.odometer + this.tank * this.milesPerGallon;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}

const myCar = new Car("Tesla", 50);

myCar.fill(10);
console.log(myCar);

myCar.drive(50);
console.log(myCar);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
class Baby extends Person {
  constructor(name, favoriteToy) {
    super(name);
    this.favoriteToy = favoriteToy;
  }

  play() {
    return `Playing with ${this.favoriteToy}`;
  }
}

const junior = new Baby ("Junior", "Spiderman");
console.log(junior);


/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. When not inside an object, "This" is equal to window/console
  2. When followed by a dot, "This" refers to previous object
  3. When using a contructor, "This" is equal to the future created object
  4. When using call, apply or bind, "This" equals the object/function preceding the dot of call, apply or bind
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
