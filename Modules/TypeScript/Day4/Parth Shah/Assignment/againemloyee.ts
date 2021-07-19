
                    //========================Assighnment day 4 ==============/====/
//making interface for employee
interface employee{
    id : number ;
    name : string;
    city : string;
    doj : Date;
}



//making array to store employee:
var emp : employee[] = [
    {id : 1,name : 'Parth Shah',city : 'Mumbai', doj : new Date('2016/2/2') },
    {id : 2,name : 'Kush Shah',city : 'Ahemdabad', doj : new Date('2019/1/2') },
    {id : 3,name : 'Hathi Shah',city : 'Haripar', doj : new Date('2020/9/12') },
    {id : 4,name : 'Popat Shah',city : 'Mumbai', doj : new Date('2020/2/2') }


];

//find the employee through index number 
class assignment{
findEmployee(ids:number){
var  byId = emp.filter(t=>t.id == ids) 


if(ids == null)
{
    console.log('Please Enter Proper EmployeeID :');
}
else{
    console.log('=======================================You have searched it for :=================================');
   console.log(`\nThe Id: ${byId[0].id} , Name : ${byId[0].name}, City : ${byId[0].city} and DOJ : ${byId[0].doj}`);


}
}

//Search the employees who has joined after year 2020

findDate(){
    console.log('\n========================================List of Employee Who has joined after 2020=========================================================\n');

    for (const d of emp)
    {
        if(d.doj > new Date('2020'))
        {
            console.log(`${d.name} is joining after  2020`);
        }
    }

}

//Search the employee who has joined after year 2020 and stays in Mumbai city

findDateAndEmployee(){
console.log('\n ================================List of employee who lives in mumbai and joining in 2020===============================\n');

for (const da of emp)
{
if(da.city == 'Mumbai' && da.doj > new Date('2020'))
{
console.log(`${da.name} lives in ${da.city} and joined after 2020`);
}
}
}

}


//calling every function
var t = new assignment();
t.findDate();
t.findEmployee(1);
t.findDateAndEmployee();