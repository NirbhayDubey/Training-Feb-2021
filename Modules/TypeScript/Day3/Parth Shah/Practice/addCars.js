"use strict";
exports.__esModule = true;
var module_1 = require("./module");
//if i have to import entire module of moule file
//so its like: import * as gadi from "./Module"
var car1 = new /*emp.*/ module_1.car(1, "Verna", "Hyundai", 1200000);
console.log(car1.display());
console.log('Find area of circle :');
var radius = 10;
console.log(2 * module_1.myConstants.pi * radius);
// we can also renamin the class like 
//import {car as MyCar } from "./Module"
/*
so the above code looks like :
var car1 = new MyCar(1,"Verna","Hyundai",1200000);
console.log(car1.display());
*/
