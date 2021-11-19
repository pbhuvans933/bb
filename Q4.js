"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(data) {
        this.stdid = data.stdid || 1234;
        this.stdname = data.stdname || 'bhuvan';
        this.stdclass = data.stdclass || 'btech';
    }
    return Student;
}());
exports.Student = Student;
