var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var age = 12;
age = 2;
var fullName = "akram";
fullName = "Aleena";
var isFullName = true;
isFullName = false;
var team;
team = ["Akram", "Aleena"];
var personDetail;
personDetail = {
    dob: 24101988,
    location: "Nellore"
};
var person;
person = "Akram";
console.log("Person :", person);
person = 33;
var newPerson;
newPerson = ["ak", "ak", "fk"];
console.log("New Person :", newPerson);
newPerson = ["akram khan"];
var publicSchool;
var privateSchool;
privateSchool = {
    schoolName: "D.T.E.A",
    schoolCode: 0861
};
publicSchool = {
    schoolName: "I.R.C",
    schoolCode: 862
};
//Function and types
function add(a, b) {
    return a + b;
}
//Generic
function insertAtStart(array, value) {
    var resultArray = __spreadArray([value], array);
    return resultArray;
}
var numArray = insertAtStart([1, 2, 3], 5);
var strArray = insertAtStart(['s', 'd', 'f'], 'a');
//Classes and Typescript
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    return Student;
}());
var student = new Student('AK', 'KH', 33, ['ang']);
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
console.log("Addtion :", add(2, 3));
console.log("Classes Student :", student);
