/* The Date object represents a date and time functionality in TypeScript. It allows us to get or set the year, month and day, hour, minute, second, and millisecond.

If we create a date without any argument passed to its constructor, by default, it contains the date and time of the user's computer.*/

            //==Date PRactice ==//

//new date 
            let date3: Date = new Date();  
            console.log("Date = " + date3); //Date = Tue Feb 05 2019 12:05:22 GMT+0530 (IST)  


            //new date (date string)
            let date1: Date = new Date("2019-01-16");  
            console.log("Date = " + date1); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)  


            //examples :

            console.log('====================================================================\n');

            
            let date: Date = new Date(2017, 4, 4, 17, 23, 42, 11);  
date.setDate(13);  
date.setMonth(13);  
date.setFullYear(2013);  
date.setHours(13);  
date.setMinutes(13);  
date.setSeconds(13);  
console.log("Year = " + date.getFullYear());  
console.log("Date = " + date.getDate());  
console.log("Month = " + date.getMonth());  
console.log("Day = " + date.getDay());  
console.log("Hours = " + date.getHours());  
console.log("Minutes = " + date.getMinutes());  
console.log("Seconds = " + date.getSeconds());  