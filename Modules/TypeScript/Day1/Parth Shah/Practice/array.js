"use strict";
//practicing arrays :
exports.__esModule = true;
exports.names = void 0;
exports.names = ['parth', 'kush', 'jethiya'];
//add elemnts to an array 
exports.names.push('iyer');
exports.names.push('sodhi');
exports.names.push('bhide');
console.log(exports.names);
//creating array which contain array and string both ;
var values = ['apple', 'banana', 2, 3];
console.log(values);
//print array using index number ;
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);
//print using for each loop ;
console.log('\n print using for each loop');
exports.names.forEach(function (element) {
    console.log(element);
});
//access array using for loop ;
console.log('\n print using for loop');
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var element = values_1[_i];
    console.log(values);
}
