"use strict";
exports.__esModule = true;
exports.checkingInterview = void 0;
//create or schedule  interview 
var inter = [
    { intId: 1, intName: '.net', intVac: 20, intHandler: 'RavalSir', intDate: new Date('20/2/2021') },
    { intId: 2, intName: 'node', intVac: 25, intHandler: 'Ranasir', intDate: new Date('25/2/2021') },
    { intId: 3, intName: 'java', intVac: 20, intHandler: 'KrunalSir', intDate: new Date('20/3/2021') }
];
var checkingInterview = /** @class */ (function () {
    function checkingInterview() {
    }
    checkingInterview.prototype.interviewDetail = function () {
        console.log('\n List the Department which needs interview ');
        for (var _i = 0, inter_1 = inter; _i < inter_1.length; _i++) {
            var i = inter_1[_i];
            console.log("Id is : " + i.intId + ", Name is : " + i.intName + " , Vacancy  is : " + i.intVac + " , Interview Handler is : " + i.intHandler);
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
            console.log("\n " + byId[0].intName + " interview is on : " + byId[0].intDate + "is conform.");
        }
    };
    return checkingInterview;
}());
exports.checkingInterview = checkingInterview;
