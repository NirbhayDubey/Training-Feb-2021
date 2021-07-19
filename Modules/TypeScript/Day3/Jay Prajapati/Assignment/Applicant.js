"use strict";
// export class Applicant {
//     Id:number;
//     Name:string;
exports.__esModule = true;
exports.checkingApplicants = void 0;
var appName = [
    { appId: 1, appFname: "Viral", appLname: "Patel", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: "node" },
    { appId: 2, appFname: "Rahul", appLname: "Rana", appAddress: 'Rajkot', appCGPA: 6, Fieldinterest: "java" },
    { appId: 3, appFname: "Jay", appLname: "Gujarati", appAddress: 'Ahmedabad', appCGPA: 9, Fieldinterest: "node" },
    { appId: 4, appFname: "Raj", appLname: "Patel", appAddress: 'Rajkot', appCGPA: 4, Fieldinterest: "node" },
    { appId: 5, appFname: "Ram", appLname: "Raval", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: ".net" },
    { appId: 6, appFname: "Rajesh", appLname: "Ramani", appAddress: 'Rajkot', appCGPA: 7, Fieldinterest: ".net" },
    { appId: 7, appFname: "Rohit", appLname: "Raval", appAddress: 'Ahmedabad', appCGPA: 9, Fieldinterest: "node" },
    { appId: 8, appFname: "Rajvi", appLname: "Patel", appAddress: 'Rajkot', appCGPA: 6, Fieldinterest: "java" },
    { appId: 9, appFname: "Krishna", appLname: "Rana", appAddress: 'Ahmedabad', appCGPA: 8, Fieldinterest: "node" },
    { appId: 10, appFname: "Krish", appLname: "Raval", appAddress: 'Rajkot', appCGPA: 8, Fieldinterest: ".net" }
];
var checkingApplicants = /** @class */ (function () {
    function checkingApplicants() {
    }
    //list of Applicants 
    checkingApplicants.prototype.appicantsDetail = function () {
        console.log('\n List the Applicants for interview ');
        for (var _i = 0, appName_1 = appName; _i < appName_1.length; _i++) {
            var a = appName_1[_i];
            console.log("Id is : " + a.appId + ", Name is : " + a.appFname + " " + a.appLname + ", Address : " + a.appAddress + "  ,CGPA : " + a.appCGPA + " ");
        }
    };
    //list of applicants with the particular id :
    checkingApplicants.prototype.applicantsById = function (id) {
        var applId = appName.filter(function (t) { return t.appId == id; });
        if (id == null) {
            console.log('Please Enter Proper Id:');
        }
        else {
            console.log("\nId is : " + applId[0].appId + ", Name is : " + applId[0].appFname + " " + applId[0].appLname + ", Address : " + applId[0].appAddress + " , FieldInterest  : " + applId[0].Fieldinterest + " ,CGPA : " + applId[0].appCGPA + " ");
        }
    };
    //selected for 
    checkingApplicants.prototype.isSelected = function () {
        console.log('\n============================List the Students who is applied  for particular filed =========================');
        for (var _i = 0, appName_2 = appName; _i < appName_2.length; _i++) {
            var sel = appName_2[_i];
            if (sel.Fieldinterest == 'node') {
                console.log(sel.appFname + " " + sel.appLname);
            }
        }
    };
    return checkingApplicants;
}());
exports.checkingApplicants = checkingApplicants;
