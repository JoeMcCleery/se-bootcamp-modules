function Student() {
  this.name = "John Doe";
  this.age = 20;
  this.course = new Course();
}

function Course() {
  this.name = "ICT";
  this.campus = "Perth";
  this.grade = new Grade();
}

function Grade() {
  this.grade = 0;
  this.getLetterGrade = () => {
    if (this.grade >= 85) {
      return "HD";
    } else if (this.grade > 75) {
      return "D";
    } else if (this.grade > 65) {
      return "C";
    } else if (this.grade > 50) {
      return "P";
    } else {
      return "F";
    }
  };
}

const student1 = new Student();
const student2 = new Student();

console.group("Student Profiles");
console.log("student1", student1);
console.log(`student2 ${student2}`);
console.groupEnd();

function NameAge() {
  this.constuctor = () => {
    this.name = "John Doe";
    this.age = 20;
  };
}

const nameAge = new NameAge();
console.log(nameAge);
// NameAge { constuctor: [Function (anonymous)] }
nameAge.constuctor();
console.log(nameAge);
// NameAge {
//   constuctor: [Function (anonymous)],
//   name: 'John Doe',
//   age: 20
// }
