let age: number = 12;
age = 2;

let fullName: string = "akram";
fullName = "Aleena";

let isFullName: boolean = true;
isFullName = false;

let team: string[];
team = ["Akram", "Aleena"];

let personDetail: {
  dob: number;
  location: string;
};
personDetail = {
  dob: 24101988,
  location: "Nellore",
};

let person: string | number;

person = "Akram";
console.log("Person :", person);

person = 33;

let newPerson: string | string[];

newPerson = ["ak", "ak", "fk"];
console.log("New Person :", newPerson);

newPerson = ["akram khan"]

//Alias
type School = {
  schoolName : string;
  schoolCode : number;
};

let publicSchool : School;
let privateSchool : School;

privateSchool = {
  schoolName : "D.T.E.A",
  schoolCode : 0861
};

publicSchool = {
  schoolName : "I.R.C",
  schoolCode : 862
};

//Function and types
function add (a: number, b: number){
  return a + b;
}

//Generic
function insertAtStart <I> (array : I[], value:I)
{
  const resultArray = [value, ...array];
  return resultArray;
}

const numArray = insertAtStart([1,2,3], 5);
const strArray = insertAtStart(['s','d','f'],'a');

//Classes and Typescript
class Student {
  firstName : string;
  lastName : string;
  age : number;
  courses : string[];

  constructor(first: string,last: string,age:number,courses: string[]){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }
}

const student = new Student('AK','KH',33,['ang']);

console.log('NumArray :', numArray);
console.log('StrArray :', strArray);
console.log("Age:", age);
console.log("Full Name:", fullName);
console.log("Is Full Name:", isFullName);
console.log("Person Details:", personDetail);
console.log("Team :", team);
console.log("Person :", person);
console.log("New Person :", newPerson);
console.log("Private School :", privateSchool);
console.log("Public School :", publicSchool);
console.log("Addtion :", add(2,3));
console.log("Classes Student :", student);


