function printedId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printedId("jay");
function printCoord(pt) {
    console.log("The coordinate's s value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function printCoord1(pt) {
    console.log("The coordinate's s value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });
var src = 'const a = "Hello World"';
window.ts = 12;
console.log(window.ts);
