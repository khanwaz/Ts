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

newPerson = ["akram khan", ["1", "string"], personDetail];

console.log("Age:", age);
console.log("Full Name:", fullName);
console.log("Is Full Name:", isFullName);
console.log("Person Details:", personDetail);
console.log("Team :", team);
console.log("Person :", person);
console.log("New Person :", newPerson);
