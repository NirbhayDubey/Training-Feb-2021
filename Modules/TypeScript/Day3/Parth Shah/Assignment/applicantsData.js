"use strict";
//main file is main.ts in which all files of functions are imported and you can call using switch case ://
exports.__esModule = true;
exports.checkingApplicants = void 0;
var app = [
    { appId: 1, appFnmae: 'Labhu', appLname: 'Patel', appDOB: new Date(1999 / 9 / 9), appAddress: 'Mumbai', appField: 'node', appNumber: 465464656, appCGPA: 8 },
    { appId: 2, appFnmae: 'Bhikhu', appLname: 'Chorasiya', appDOB: new Date(1999 / 8 / 26), appAddress: 'Halvad', appField: '.net', appNumber: 465464658, appCGPA: 4.5 },
    { appId: 3, appFnmae: 'Jivadaya', appLname: 'Gada', appDOB: new Date(1999 / 9 / 9), appAddress: 'Mumbai', appField: 'QA', appNumber: 465464659, appCGPA: 9.0 },
    { appId: 4, appFnmae: 'Champak', appLname: 'Shah', appDOB: new Date(1997 / 8 / 9), appAddress: 'America', appField: 'QA', appNumber: 465425646, appCGPA: 4.6 },
    { appId: 5, appFnmae: 'Tapu', appLname: 'sena', appDOB: new Date(1999 / 8 / 15), appAddress: 'Mumbai', appField: 'node', appNumber: 4464664656, appCGPA: 8 },
    { appId: 6, appFnmae: 'Pulkit', appLname: 'Gada', appDOB: new Date(1999 / 8 / 17), appAddress: 'Ahemdabad', appField: 'QA', appNumber: 46546464656, appCGPA: 7.6 },
    { appId: 7, appFnmae: 'Sushant', appLname: 'Patel', appDOB: new Date(1999 / 2 / 2), appAddress: 'Lonawala', appField: '.net', appNumber: 4654654564, appCGPA: 9.8 },
    { appId: 8, appFnmae: 'Shahrukh', appLname: 'Khan', appDOB: new Date(1999 / 9 / 2), appAddress: 'Mumbai', appField: 'node', appNumber: 465464646, appCGPA: 6.4 },
    { appId: 9, appFnmae: 'Rohit', appLname: 'Modi', appDOB: new Date(1999 / 9 / 11), appAddress: 'Goa', appField: '.net', appNumber: 4654646624, appCGPA: 8.6 }
];
var checkingApplicants = /** @class */ (function () {
    function checkingApplicants() {
    }
    //list of Applicants 
    checkingApplicants.prototype.appicantsDetail = function () {
        console.log('\n List the Applicants for interview ');
        console.log('=============================================================================================\n');
        for (var _i = 0, app_1 = app; _i < app_1.length; _i++) {
            var a = app_1[_i];
            console.log("Id is : " + a.appId + ", Name is : " + a.appFnmae + " " + a.appLname + ", DOB :" + a.appDOB + " , Address : " + a.appAddress + " , Field  : " + a.appField + " , MobileNo :" + a.appNumber + " ,CGPA : " + a.appCGPA + " ");
        }
    };
    //list of applicants with the particular id :
    checkingApplicants.prototype.applicantsById = function (id) {
        var applId = app.filter(function (t) { return t.appId == id; });
        if (id == null) {
            console.log('Please Enter Proper Id:');
        }
        else {
            console.log("\nId is : " + applId[0].appId + ", Name is : " + applId[0].appFnmae + " " + applId[0].appLname + ", DOB :" + applId[0].appDOB + " , Address : " + applId[0].appAddress + " , Field  : " + applId[0].appField + " , MobileNo :" + applId[0].appNumber + " ,CGPA : " + applId[0].appCGPA + " ");
        }
    };
    checkingApplicants.prototype.isSelected = function () {
        console.log('\n============================List the Students who is applied  for particular filed =========================');
        console.log('============================================================================================================================\n');
        for (var _i = 0, app_2 = app; _i < app_2.length; _i++) {
            var sel = app_2[_i];
            if (sel.appField == 'node') {
                console.log(sel.appFnmae + " " + sel.appLname);
            }
        }
    };
    return checkingApplicants;
}());
exports.checkingApplicants = checkingApplicants;
