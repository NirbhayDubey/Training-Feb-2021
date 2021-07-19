//enum practices
/*
There are three types of enums:

Numeric enum
String enum
Heterogeneous enum
*/
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUN"] = 0] = "SUN";
    DaysOfWeek[DaysOfWeek["MON"] = 1] = "MON";
    DaysOfWeek[DaysOfWeek["TUES"] = 2] = "TUES";
    DaysOfWeek[DaysOfWeek["WED"] = 3] = "WED";
    DaysOfWeek[DaysOfWeek["THURS"] = 4] = "THURS";
    DaysOfWeek[DaysOfWeek["FRI"] = 5] = "FRI";
    DaysOfWeek[DaysOfWeek["SAT"] = 6] = "SAT";
})(DaysOfWeek || (DaysOfWeek = {}));
var day;
day = DaysOfWeek.SUN;
if (day == DaysOfWeek.SUN) {
    console.log("Sunday is a holiday ");
}
else {
    console.log("You have to go school ");
}
//finding area of circle :
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.7] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.5] = "log5";
})(myConstants || (myConstants = {}));
console.log('Find area of circle :');
var radius = 10;
console.log(2 * myConstants.pi * radius);
var color;
(function (color) {
    color[color["red"] = 21] = "red";
    color[color["green"] = 22] = "green";
    color[color["blue"] = 23] = "blue";
})(color || (color = {}));
console.log(color.red);
