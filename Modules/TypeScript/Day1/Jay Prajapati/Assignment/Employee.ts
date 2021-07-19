let emp:Array<any> =[
    {Id : 1,firstName:"jay",lastName:"Prajapati",address:"12,Vijapur,Gujarat,",salary:50000},
    {Id : 2,firstName:"Reema",lastName:"Patel",address:"101,culcatta,Banglore",salary:40000},
    {Id : 3,firstName:"Reeta",lastName:"Patel",address:"201,Ahmedabad,Gujarat",salary:30000},
    {Id : 4,firstName:"Ramesh",lastName:"Sharma",address:"301,Surat,Gujarat",salary:20000},
    {Id : 5,firstName:"John",lastName:"Doe",address:"501,Baroda,Gujarat",salary:10000},
];
function SearchByIndex(index){
    console.log(emp[index]);

}
 function SearchByEmpID(ID : number){
     const e = emp.filter(e=>e.Id == ID);
     console.log(e);

}
function AddEmployee(e){
    emp.push(e);
}

function DeleteLastEmployee(){
    return emp.pop();
}

function GetAllEmployee(employees){
    console.log("ID\tFullName\tAddress\t\tSalary");
    for (let e of employees) {
        
        console.log(e.Id + "\t" +e.firstName + " "+e.lastName + "\t"+(e.address as string).split(',') + "\t"+e.salary);
    }
}
 function GetAddressOfEmployee(employees){
     for (let e of emp) {
         let add = (e.address as string).split(',');
         
         for(let s of add){
             console.log(s);
         }
     }

 }

SearchByIndex(1);
SearchByEmpID(4);
let em = {Id : 5,firstName:"Adam",lastName:"Smith",address:"New York",salary:15000};
AddEmployee(em)
GetAllEmployee(emp);
console.log(DeleteLastEmployee());

let newEmp = [
    {Id : 7,firstName:"Bajirao",lastName:"Mastani",address:"22,Channai,TamilNadu",salary:100000},
    {Id : 8,firstName:"Tarak",lastName:"Mehta",address:"31,Mumbai,Maharastra",salary:80000}
];
var newlist =  emp.concat(newEmp);

GetAllEmployee(newlist);

GetAddressOfEmployee(newlist);