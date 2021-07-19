"use strict";
exports.__esModule = true;
exports.checkingInterview = void 0;
//create or schedule  interview 
var inter = [
    { intId: 1, intName: '.net', intVac: 23, intHandler: 'Mr.Mehta', intDate: new Date("2021/2/2") },
    { intId: 1, intName: 'node', intVac: 45, intHandler: 'Mr.Gada', intDate: new Date("2021/2/28") },
    { intId: 1, intName: 'QA', intVac: 45, intHandler: 'Mr.Jaduwala', intDate: new Date("2021/3/9") }
];
var checkingInterview = /** @class */ (function () {
    function checkingInterview() {
    }
    checkingInterview.prototype.interviewDetail = function () {
        console.log('\n List the Department which needs interview ');
        console.log('===================================================================\n');
        for (var _i = 0, inter_1 = inter; _i < inter_1.length; _i++) {
            var i = inter_1[_i];
            console.log("Id is : " + i.intId + ", Name is : " + i.intName + " , Vacancy  is : " + i.intVac + " , Interview Handler is : " + i.intHandler + " , interview Date is : " + i.intDate);
        }
    };
    //checking sppecific interview handler for specific department
    checkingInterview.prototype.checkByName = function (dept) {
        var byId = inter.filter(function (t) { return t.intName == dept; });
        if (dept == null) {
            console.log('Please Enter Proper Department name:');
        }
        else {
            console.log('\n=======checking interview Handler for particular department============');
            console.log("\nThe Interview handler of " + byId[0].intName + " is : " + byId[0].intHandler);
        }
    };
    //checking interview date for particular department
    checkingInterview.prototype.checkDate = function (dept) {
        var byId = inter.filter(function (t) { return t.intName == dept; });
        if (dept == null) {
            console.log('Please Enter Proper Department name:');
        }
        else {
            console.log('\n=======checking interview date for particular department============');
            console.log("\n " + byId[0].intName + " interview is on : " + byId[0].intDate);
        }
    };
    return checkingInterview;
}());
exports.checkingInterview = checkingInterview;
// let i = new checkingInterview();
// i.interviewDetail();
// i.checkByName('node');
// i.checkDate('node');
