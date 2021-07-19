                    //=========================Practices map===================================// :
    /*TypeScript map is a new data structure added in ES6 version of JavaScript. 
It allows us to store data in a key-value pair and remembers the original insertion order of the keys similar to other programming languages. 
    In TypeScript map, we can use any value either as a key or as a value.*/

  //create map


  let ageMapping =  new Map();

  ageMapping.set("Parth",23);
  ageMapping.set("Amit",23);
  ageMapping.set("Sumit",23);

  //iterate over map keys 

  for (let key of ageMapping.keys())
  {
      console.log("Map Values :" +key);

  }

  //iterate over map values :

  for(let value of  ageMapping.values())
  {
    console.log("Map Values :" +value);

  }

  //map enteries 
  console.log('The map entries  are :');

  for (let entry of ageMapping.entries())
  {
      console.log(entry[0],entry[1]);
  }
