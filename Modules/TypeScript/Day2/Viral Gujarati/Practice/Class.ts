//class
class Employee{
    static getsalary(arg0: number): any {
        throw new Error("Method not implemented.");
    }
    empcode: number;
    empName:string;

    constructor(code:number,name:string){
        this.empName = name;
        this.empcode = code;
    }
    getSalary() :number{
        return 1000;
    }
}
//creating object
// let emp = new Employee(12,"viral gujarati");
// console.log(emp.getSalary())

//class
class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  
  let greeter = new Greeter("world");

  
//inheritance 
class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
  
  sam.move();
  tom.move(34);