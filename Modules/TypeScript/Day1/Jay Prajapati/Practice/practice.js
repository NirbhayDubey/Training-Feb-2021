var message = "Hello World";
message();
console.log(message.toLowerCase());
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Brendan", new Date());
