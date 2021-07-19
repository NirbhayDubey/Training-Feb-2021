//==============Set Practices0===========//
let studentEntries = new Set();
//Add Values  
studentEntries.add("Parth");
studentEntries.add("Shahbhai");
studentEntries.add("Mehtabhai");
studentEntries.add("Gadabhai");
studentEntries.add("Iyerbhai");
//Returns Set data  
console.log(studentEntries);
//Check value is present or not  
console.log(studentEntries.has("Gadabhai"));
console.log(studentEntries.has(10));
//It returns size of Set  
console.log(studentEntries.size);
//Delete a value from set  
console.log(studentEntries.delete("Iyerbhai"));
//Clear whole Set  
studentEntries.clear();
//Returns Set data after clear method.  
console.log(studentEntries);
