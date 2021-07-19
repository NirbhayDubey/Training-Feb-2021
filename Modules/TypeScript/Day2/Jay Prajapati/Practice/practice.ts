function printedId(id: number | string){
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id);
    }
}
printedId("jay");

type Point = {
    x: number;
    y: number;
};
function printCoord(pt: Point){
    console.log("The coordinate's s value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({x:100,y:100});

interface Point1{
    x:number;
    y:number;
}
function printCoord1(pt: Point1){
    console.log("The coordinate's s value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord1({x:100,y:100});

//Type alias

type Animal = {
    name: string
  }
  
  type Bear = Animal & { 
    honey: Boolean 
  }
  
  //const bear = getBear();
//   bear.name;
//   bear.honey;


  //interface

  interface IAnimal {
    name: string
  }
  
  interface IBear extends Animal {
    honey: boolean
  }
  
  //const bear1 = getBear1() 
//   bear.name
//   bear.honey


  //Adding new fields to an existing interface

interface Window {
  title: string
}

interface Window {
  ts:number
}

// const src = 'const a = "Hello World"';
// window.ts = 12;
// console.log(window.ts);
        