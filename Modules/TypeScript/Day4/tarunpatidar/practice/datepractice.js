// New Date () : Current Date And Time
let date = new Date();
console.log("Date = " + date); // Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)
console.log("=================================");
// New Date (millseconds) : as Zero Time Plus milliseconds
let date1 = new Date(500000000000);
console.log("Date = " + date1); // Date = Tue Nov 05 1985 06:23:20 GMT+0530 (IST)  
console.log("=================================");
// New Date (datestring) : From a datestring
let date2 = new Date("2019-01-16");
console.log("Date = " + date2); // Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)  
console.log("=================================");
// New Date (year , month , date [hour , minute , second , millisecond])
let date3 = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);
console.log("Date = " + date3); // Date = Tue Jun 05 2018 17:23:42 GMT+0530 (IST)
console.log("=================================");
// Date Example
let date4 = new Date(2021, 4, 4, 17, 23, 42, 11);
date4.setDate(13);
date4.setMonth(13);
date4.setFullYear(2021);
date4.setHours(13);
date4.setMinutes(13);
date4.setSeconds(13);
console.log("Year = " + date4.getFullYear());
console.log("Date = " + date4.getDate());
console.log("Month = " + date4.getMonth());
console.log("Day = " + date4.getDay());
console.log("Hours = " + date4.getHours());
console.log("Minutes = " + date4.getMinutes());
console.log("Seconds = " + date4.getSeconds());
