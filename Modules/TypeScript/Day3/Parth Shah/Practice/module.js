"use strict";
//its used because  we have multiples files in the project , the variabe function etc in one file are accessibe for other files:
exports.__esModule = true;
exports.myConstants = exports.car = void 0;
//practice module :
var car = /** @class */ (function () {
    function car(id, cname, company, price) {
        this.id = id;
        this.cname = cname;
        this.company = company;
        this.price = price;
    }
    car.prototype.display = function () {
        return "Id is " + this.id + " ,Car Name is : " + this.cname + " ,Car Company is : " + this.company + " ,Car Price Is : " + this.price + " ";
    };
    return car;
}());
exports.car = car;
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.7] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.5] = "log5";
})(myConstants = exports.myConstants || (exports.myConstants = {}));
