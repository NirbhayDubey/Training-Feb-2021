"use strict";
exports.__esModule = true;
var empdata_1 = require("./empdata");
var EmpFunction = /** @class */ (function () {
    function EmpFunction() {
    }
    EmpFunction.prototype.JoingAfterYear = function (year) {
        var JoingAfterYear = empdata_1.EmpData.filter(function (x) { return x.DOJ.getFullYear() > year; });
        console.log(JoingAfterYear);
    };
    EmpFunction.prototype.GetAll = function () {
        console.log(empdata_1.EmpData);
    };
    EmpFunction.prototype.GetById = function (id) {
        var GetEmpById = empdata_1.EmpData.filter(function (x) { return x.ID == id; });
        console.log(GetEmpById);
    };
    EmpFunction.prototype.GetEmpByCityYear = function (year, city) {
        var JoingAfterYear = empdata_1.EmpData.filter(function (x) { return x.DOJ.getFullYear() > year && x.City == city; });
        console.log(JoingAfterYear);
    };
    return EmpFunction;
}());
var data = new EmpFunction();
console.log("===========================");
data.GetAll();
console.log("===========================");
data.GetById(101);
console.log("===========================");
data.JoingAfterYear(2020);
console.log("===========================");
data.GetEmpByCityYear(2020, "Mumbai");
