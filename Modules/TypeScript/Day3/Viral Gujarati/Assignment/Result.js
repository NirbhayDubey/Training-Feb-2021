"use strict";
exports.__esModule = true;
exports.checkingHiring = void 0;
//adding marks to check condition
var Result = [
    { appId: 1, appFname: "Viral", appLname: "Patel", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: "node", Marks: 20 },
    { appId: 2, appFname: "Rahul", appLname: "Rana", appAddress: 'Rajkot', appCGPA: 6, Fieldinterest: "java", Marks: 33 },
    { appId: 3, appFname: "Jay", appLname: "Gujarati", appAddress: 'Ahmedabad', appCGPA: 9, Fieldinterest: "node", Marks: 23 },
    { appId: 4, appFname: "Raj", appLname: "Patel", appAddress: 'Rajkot', appCGPA: 4, Fieldinterest: "node", Marks: 31 },
    { appId: 5, appFname: "Ram", appLname: "Raval", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: ".net", Marks: 14 },
    { appId: 6, appFname: "Rajesh", appLname: "Ramani", appAddress: 'Rajkot', appCGPA: 7, Fieldinterest: ".net", Marks: 15 },
    { appId: 7, appFname: "Rohit", appLname: "Raval", appAddress: 'Ahmedabad', appCGPA: 9, Fieldinterest: "node", Marks: 56 },
    { appId: 8, appFname: "Rajvi", appLname: "Patel", appAddress: 'Rajkot', appCGPA: 6, Fieldinterest: "java", Marks: 34 },
    { appId: 9, appFname: "Krishna", appLname: "Rana", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: "node", Marks: 23 },
    { appId: 10, appFname: "Krish", appLname: "Raval", appAddress: 'Rajkot', appCGPA: 8, Fieldinterest: ".net", Marks: 24 }
];
var checkingHiring = /** @class */ (function () {
    function checkingHiring() {
    }
    checkingHiring.prototype.isHired = function () {
        console.log('\nList the Students who get appropriate marks and selected for Comapany');
        for (var _i = 0, Result_1 = Result; _i < Result_1.length; _i++) {
            var res = Result_1[_i];
            if (res.Marks >= 25) {
                console.log("Congratulations Your Application Id: " + res.appId + "Your Name " + res.appFname + " " + res.appLname + " is selected for your interest feild " + res.Fieldinterest + " Joining wil be declared soon.");
            }
        }
    };
    return checkingHiring;
}());
exports.checkingHiring = checkingHiring;
