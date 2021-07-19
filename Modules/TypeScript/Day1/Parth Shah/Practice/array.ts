//practicing arrays :

export
  //create array ;
  let names : string[] = ['parth', 'kush','jethiya'];
  


  //add elemnts to an array 
  names.push('iyer');
  names.push('sodhi');
  names.push('bhide');

  console.log(names);

  //creating array which contain array and string both ;

  let values : Array<string | number> = ['apple','banana',2,3];
  console.log(values);

  //print array using index number ;
  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);
  console.log(values[3]);

  //print using for each loop ;

  console.log('\n print using for each loop');
  names.forEach(element => {
console.log(element);
  } );


  //access array using for loop ;
  console.log('\n print using for loop');

  for (let element of values){
      console.log(values);
  }










