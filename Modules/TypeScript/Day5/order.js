"use strict";
exports.__esModule = true;
exports.checkorder = void 0;
var order = [
    { ResId: 1, ResName: "abc", ResAddress: "Rajkot", orders: "rice" },
    { ResId: 2, ResName: "ccc", ResAddress: "Ahmedabad", orders: "naan" },
    { ResId: 3, ResName: "bbb", ResAddress: "Rajkot", orders: "lassi" }
];
var checkorder = /** @class */ (function () {
    function checkorder() {
    }
    checkorder.prototype.isordered = function () {
        console.log('\nList of items ordered ');
        for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
            var res = order_1[_i];
            if (res.orders == null) {
                console.log("\n order is empty");
            }
            else {
                console.log("Your order: " + res.ResId + "Restaurant Name " + res.ResName + ",order is  " + res.orders);
            }
        }
    };
    return checkorder;
}());
exports.checkorder = checkorder;
