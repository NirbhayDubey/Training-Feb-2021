import {car,myConstants} from './module'

//if i have to import entire module of moule file
//so its like: import * as gadi from "./Module"


var car1 = new /*emp.*/car(1,"Verna","Hyundai",1200000);
console.log(car1.display());


console.log('Find area of circle :');
var radius : number = 10;
console.log(2* myConstants.pi * radius);

// we can also renamin the class like 
//import {car as MyCar } from "./Module"


/* 
so the above code looks like :
var car1 = new MyCar(1,"Verna","Hyundai",1200000);
console.log(car1.display());
*/


