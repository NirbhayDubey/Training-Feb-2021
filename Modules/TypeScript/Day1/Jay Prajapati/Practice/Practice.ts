const message:any = "Hello World";
//message();
console.log(message.toLowerCase());
function greet(person:string, date:Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
  
  greet("Brendan",new Date());
  
