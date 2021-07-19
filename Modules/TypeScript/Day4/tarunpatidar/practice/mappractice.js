// Map Methods Example
let map = new Map();
map.set('1', 'Tarun');
map.set(1, 'www.radixweb.com');
map.set(true, 'bool1');
map.set('2', 'Patidar');
console.log("============ MAP METHODS EXAMPLE ===============");
console.log("Value1 = " + map.get(1));
console.log("Value2 = " + map.get('1'));
console.log("Key is Present = " + map.has(3));
console.log("Size = " + map.size);
console.log("Delete Values = " + map.delete(1));
console.log("New Size = " + map.size);
// Iterate Over Map Keys Or Values Or Entries Example
let ageMapping = new Map();
ageMapping.set("Tarun", 50);
ageMapping.set("TR", 40);
ageMapping.set("Shivam", 20);
console.log("============ Iterate Over Map or Values or Entries Keys ================");
//Iterate over map keys 
for (let key of ageMapping.keys()) {
    console.log("Map Keys= " + key);
}
//Iterate over map values
for (let value of ageMapping.values()) {
    console.log("Map Values= " + value);
}
console.log("The Map Enteries are: ");
//Iterate over map entries  
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
