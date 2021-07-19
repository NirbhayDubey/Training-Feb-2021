"use strict";
exports.__esModule = true;
exports.checkAvailabilty = exports.Restaurants = void 0;
var Res = [
    { ResId: 1, ResName: 'abc', QuantityAvailable: 25, itemName: "rice", ResDetail: 999999999 },
    { ResId: 1, ResName: 'ccc', QuantityAvailable: 20, itemName: "naan", ResDetail: 999999999 },
    { ResId: 1, ResName: 'bbb', QuantityAvailable: 25, itemName: "kulcha", ResDetail: 999999999 }
];
var Restaurants = /** @class */ (function () {
    function Restaurants() {
    }
    Restaurants.prototype.list = function () {
        console.log("Hotel List for online order");
        for (var _i = 0, Res_1 = Res; _i < Res_1.length; _i++) {
            var check = Res_1[_i];
            console.log("Name of hotel is : " + check.ResName + ",and contact details are " + check.ResDetail);
        }
    };
    return Restaurants;
}());
exports.Restaurants = Restaurants;
var checkAvailabilty = /** @class */ (function () {
    function checkAvailabilty() {
    }
    checkAvailabilty.prototype.itemAvailaible = function () {
        console.log('\n List of Orders which are available  ');
        for (var _i = 0, Res_2 = Res; _i < Res_2.length; _i++) {
            var val = Res_2[_i];
            if (val.QuantityAvailable > 1) {
                console.log("Please select proper Quantity");
            }
        }
    };
    return checkAvailabilty;
}());
exports.checkAvailabilty = checkAvailabilty;
