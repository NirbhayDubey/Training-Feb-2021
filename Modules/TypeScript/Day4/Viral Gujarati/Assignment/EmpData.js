"use strict";
exports.__esModule = true;
exports.checkingEmpByID = void 0;
var employee = [
    { Id: 1, Name: "viral", City: "rajkot", Dob: new Date('2020/2/31') },
    { Id: 2, Name: "rahul", City: "surat", Dob: new Date('2019/2/5') },
    { Id: 3, Name: "rohit", City: "vadodra", Dob: new Date('2021/2/3') },
    { Id: 4, Name: "krishna", City: "anand", Dob: new Date('2018/2/1') },
    { Id: 5, Name: "seema", City: "ahmedabad", Dob: new Date('2021/2/22') }
];
// retrieving value by index and performing an operation 
console.log(employee);
var checkingEmpByID = /** @class */ (function () {
    function checkingEmpByID() {
    }
    checkingEmpByID.prototype.applicantsById = function (id) {
        var Id = employee.filter(function (t) { return t.Id == id; });
        if (id == null) {
            console.log('Please Enter Proper Id:');
        }
        else {
            console.log("\n Employee Id is : " + Id[0].Id + ", Name is : " + Id[0].Name + ", DOB :" + Id[0].Dob + " , City : " + Id[0].City + " ");
        }
    };
    checkingEmpByID.prototype.SerchByDob = function () {
        for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
            var b = employee_1[_i];
            if (b.Dob > new Date("2020")) {
                console.log("Name of Employee :" + b.Name + " who has joined after 2020");
            }
        }
    };
    checkingEmpByID.prototype.EmpDob = function () {
        for (var _i = 0, employee_2 = employee; _i < employee_2.length; _i++) {
            var e = employee_2[_i];
            if (e.City == "rajkot" && e.Dob > new Date("2020")) {
                console.log("Name of Employee :" + e.Name + " who has joined after 2020 and living in: " + e.City);
            }
        }
    };
    return checkingEmpByID;
}());
exports.checkingEmpByID = checkingEmpByID;
