// Set Methods example
let studentEntries = new Set();
// Add Values
studentEntries.add("Rohit");
studentEntries.add("Dhawan");
studentEntries.add("Hardik");
studentEntries.add("Kohli");
studentEntries.add("KL Rahul");
// Returns Set Data
console.log(studentEntries);
// Check Value is Present or Not
console.log(studentEntries.has("Kohli"));
console.log(studentEntries.has(10));
// It Returns Size of Set
console.log(studentEntries.size);
// Delete a Value From Set
console.log(studentEntries.delete("Dhawan"));
// Clear Whole Set
studentEntries.clear();
// Returns Set Data After Clear Method
console.log(studentEntries);
console.log("===========================================");
// Set Method also Allows The Chaining of add() Method
// Chaining of add() method is allowed in TypeScript  
studentEntries.add("Rohit").add("Hardik").add("Kohli").add("KL Rahul");
// Returns Set data 
console.log("The List of Set values:");
console.log(studentEntries);
console.log("==========================================");
// Iterate over Set Values or Entries Example
let diceEntries = new Set();
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);
// Iterate Over Set Entries
console.log("Dice Entries are : ");
for (let diceNumber of diceEntries) {
    console.log(diceNumber);
}
// Iterate Set Entries With forEach 
console.log("Dice Entries with forEach are : ");
diceEntries.forEach(function (value) {
    console.log(value);
});
