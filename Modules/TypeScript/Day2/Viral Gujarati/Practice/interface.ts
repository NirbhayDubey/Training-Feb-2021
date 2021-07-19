interface IEmployee{
    empcode: number;
    empName: string;
    getsalary:(number)=>number;
}
class employee implements IEmployee {
     empcode: number;
     name: string;

     constructor(code: number, name:string){

        this.empcode = code;
        this.name = name;

     }
    empName: string;
     
getsalary(empcode:number):number{
    return 1000;
}

}


let emp = new employee(1,"viral");
console.log(emp.getsalary(1000))