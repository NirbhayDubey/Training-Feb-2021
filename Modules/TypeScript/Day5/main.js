"use strict";
exports.__esModule = true;
var test_1 = require("./test");
var RestaurantMain_1 = require("./RestaurantMain");
var Onlinereservation_1 = require("./Onlinereservation");
var order_1 = require("./order");
var Costomer_1 = require("./Costomer");
var a = new test_1.CheckRestaurant();
var b = new RestaurantMain_1.checkAvailabilty();
var c = new Onlinereservation_1.checkReservation();
var d = new order_1.checkorder();
var e = new Costomer_1.cust();
var f = new RestaurantMain_1.Restaurants();
var op = 2;
switch (op) {
    // details 
    case 1:
        console.log('Restaurant Details :');
        a.restaurantDetail();
        break;
    case 2:
        console.log('List for online order:');
        b.itemAvailaible();
        break;
    case 3:
        console.log('hotel Reservation detail:');
        c.ReservationDetail();
        break;
    case 4:
        console.log('Order details:');
        d.isordered();
        break;
    case 5:
        console.log('hotel Reservation table booking :');
        e.bookTable;
        break;
    case 6:
        console.log('list:');
        f.list();
        break;
}
// case 2 : console.log('Normally list out the department and their vancancies:');
// n.checkDept();
// break;
// case 3 : console.log('check vacancies by specific id :');
// n.checkById(2);
// break;
