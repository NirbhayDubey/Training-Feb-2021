//emum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
;
var c;
console.log(Color.Red);
//enum
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction, Direction1);
