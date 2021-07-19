//interface as function
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empcode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empcode) {
        return 2000;
    };
    return Employee;
}());
var emp = new Employee(1, 'Steve');
console.log(emp.getSalary(2000));
var numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[2]);
var empObj1 = {
    //ok
    empCode: 1,
    empName: 'Parth'
};
console.log(empObj1.empCode);
console.log(empObj1.empName);
var yello = {
    empCode: 1,
    name: 'Parth',
    gender: 'Male'
};
console.log(yello.empCode);
console.log(yello.name);
console.log(yello.gender);
