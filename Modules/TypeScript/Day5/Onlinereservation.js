"use strict";
exports.__esModule = true;
exports.checkReservation = void 0;
var Book = [
    { ResId: 1, ResName: "abc", ResAddress: "Rajkot" },
    { ResId: 2, ResName: "ccc", ResAddress: "Ahmedabad" },
    { ResId: 3, ResName: "bbb", ResAddress: "Rajkot" }
];
// let res :Array<onlinereservation> =[];
// console.log("Available Restaurant");
//checkReservation
var checkReservation = /** @class */ (function () {
    function checkReservation() {
    }
    checkReservation.prototype.ReservationDetail = function () {
        console.log('\n List Of Restaurant which book online reservation:');
        for (var _i = 0, Book_1 = Book; _i < Book_1.length; _i++) {
            var i = Book_1[_i];
            console.log("Restarant Id is : " + i.ResId + ", Name is : " + i.ResName + " , Booking available  : " + i.ResAddress + " ");
        }
    };
    return checkReservation;
}());
exports.checkReservation = checkReservation;
