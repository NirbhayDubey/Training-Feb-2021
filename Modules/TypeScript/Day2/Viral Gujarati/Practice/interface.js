var employee = /** @class */ (function () {
    function employee(code, name) {
        this.empcode = code;
        this.name = name;
    }
    employee.prototype.getsalary = function (empcode) {
        return 1000;
    };
    return employee;
}());
var emp = new employee(1, "viral");
console.log(emp.getsalary(1000));
