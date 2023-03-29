var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ".").concat(lastName); };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName;
        this.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Working on home work now";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Chidalu", "Ilo");
console.log(student.displayName());
console.log(student.workOnHomework());
