"use strict";
//main file is main.ts in which all files of functions are imported and you can call using switch case ://
exports.__esModule = true;
exports.checkingVacancy = void 0;
//====================================================Creating Vacancies :=======================================================//
var department = [
    { id: 1, DeptName: '.net', Vacancies: 23 },
    { id: 2, DeptName: 'Java', Vacancies: 12 },
    { id: 3, DeptName: 'node', Vacancies: 45 },
    { id: 4, DeptName: 'graphics', Vacancies: 1 },
    { id: 5, DeptName: 'QA', Vacancies: 45 }
];
var checkingVacancy = /** @class */ (function () {
    function checkingVacancy() {
    }
    //it will carry out the name of that department which has higher vacancies than 15:
    checkingVacancy.prototype.vacancyAvailaible = function () {
        console.log('\n List the Department which needs interview ');
        console.log('===================================================================\n');
        for (var _i = 0, department_1 = department; _i < department_1.length; _i++) {
            var val = department_1[_i];
            if (val.Vacancies > 15) {
                console.log("Interview needed for Id: " + val.id + " and Dept Name :  " + val.DeptName + " and Vacancies are : " + val.Vacancies);
            }
        }
    };
    checkingVacancy.prototype.checkDept = function () {
        //it normally list the department and their vancancies 
        console.log('\nCheck department and their vacancies :');
        console.log('===================================================================\n');
        for (var _i = 0, department_2 = department; _i < department_2.length; _i++) {
            var dep = department_2[_i];
            console.log("Id is : " + dep.id + ", Name is : " + dep.DeptName + " , Vacancy  is : " + dep.Vacancies);
        }
    };
    //check vacancies by specific id :
    checkingVacancy.prototype.checkById = function (id) {
        //this will check the vacancies for specific dept id:
        var byId = department.filter(function (t) { return t.id == id; });
        if (id == null) {
            console.log('Please Enter Proper Id:');
        }
        else {
            console.log("\nThe vacancy of " + byId[0].DeptName + " is : " + byId[0].Vacancies);
        }
    };
    return checkingVacancy;
}());
exports.checkingVacancy = checkingVacancy;
