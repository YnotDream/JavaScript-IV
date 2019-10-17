// CODE here for your Lambda Classes

class People {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends People {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty; // what the Instructor is good at i.e. 'redux'
    this.favLanguage = attributes.favLanguage; // 'JavaScript, Python, Elm etc.'
    this.catchPhrase = attributes.catchPhrase; // Don't forget the homies
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends People {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach((element) => console.log(element));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standup(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// 2 objects of Instructor class

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

console.log(fred);

const mike = new Instructor({
  name: "Mike",
  location: "Kansas City",
  age: 63,
  favLanguage: "Java",
  specialty: "Back-end",
  catchPhrase: `What the heck`
});

console.log(mike);

// 2 objects of Student class
const john = new Student({
  name: "John",
  location: "Paris",
  age: 25,
  previousBackground: "Accounting",
  className: "Data Science",
  favSubjects: ["HTML", "CSS", "JavaScript"]
});

const lisa = new Student({
  name: "Lisa",
  location: "London",
  age: 36,
  previousBackground: "Engineer",
  className: "Design",
  favSubjects: ["Data Science", "React", "Maths"]
});

console.log(lisa);

// 2 objects of PM class

const karen = new ProjectManager({
  name: "Karen",
  location: "Toronto",
  age: 42,
  favLanguage: "Cobol",
  specialty: "Data Science",
  catchPhrase: "Dig it",
  gradClassName: "Data Science",
  favInstructor: "Mike"
});

console.log(karen);

const lucas = new ProjectManager({
  name: "Lucas",
  location: "Cincinnati",
  age: 55,
  favLanguage: "React",
  specialty: "Design",
  catchPhrase: "Less is more",
  gradClassName: "Design",
  favInstructor: "Fred",
});

console.log(lucas);


// test object methods

fred.demo("JavaScript");
fred.grade(john, "JavaScript");

mike.demo("Java");
mike.grade(lisa, "Java");

lisa.listsSubjects();
john.PRAssignment("JavaScript");
lisa.sprintChallenge("Design");

lucas.standup("EU channel");
karen.debugsCode(john, "JavaScript");