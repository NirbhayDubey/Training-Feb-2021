export interface employee{
  Id: number;
  Name: string;
  City: string;
  Dob:Date;
}

var employee:employee[]=[
{Id:1,Name:"viral",City:"rajkot",Dob:new Date ('2020/2/31')},
{Id:2,Name:"rahul",City:"surat",Dob:new Date('2019/2/5')},
{Id:3,Name:"rohit",City:"vadodra",Dob:new Date('2021/2/3')},
{Id:4,Name:"krishna",City:"anand",Dob:new Date('2018/2/1')},
{Id:5,Name:"seema",City:"ahmedabad",Dob:new Date('2021/2/22')}
];


// retrieving value by index and performing an operation 
console.log(employee);


export class checkingEmpByID{

applicantsById(id:number){
    var Id = employee.filter(t=>t.Id == id);
    if(id == null)
    {
        console.log('Please Enter Proper Id:');
    }
    else{
        
       console.log(`\n Employee Id is : ${Id[0].Id}, Name is : ${Id[0].Name}, DOB :${Id[0].Dob} , City : ${Id[0].City} `);
    }
}

    
SerchByDob(){
    for (const b of employee){
        if(b.Dob > new Date("2020")){
            console.log(`Name of Employee :${b.Name} who has joined after 2020`);
        }
    }
}

EmpDob(){
    for (const e of employee){
        if(e.City=="rajkot" && e.Dob > new Date("2020")){
            console.log(`Name of Employee :${e.Name} who has joined after 2020 and living in: ${e.City}`);
        }
    }
} 
}
