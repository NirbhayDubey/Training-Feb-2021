                                                        //interface as function

interface KeyValueProcessor
{
    (key: number, value: string): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
    
let kvp: KeyValueProcessor = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 


                                                                //interface :

interface Iemployee{
    empcode : number;
    name : string;
    getSalary:(number)=>number;

}

class Employee implements Iemployee{
    empcode:number;
    name:string;

    constructor(code: number, name :string) {
        this.empcode = code;
        this.name = name;

    }

    getSalary (empcode:number):number{
        return 2000;
    }
}

let emp = new Employee(1,'Steve');
console.log(emp.getSalary(2000));

                                                            //interface as typr:

                                                //interface as array type

interface NumList {
    [index:number] : number;
}

let numArr : NumList = [1,2,3];
console.log(numArr[0]);
console.log(numArr[2]);

                                                    //interface for creating property

interface IEmployee {
    empCode : number;
    empName : string;
    empDept ? : string;  //optional
}

let empObj1 :IEmployee = {
    //ok
    empCode:1,
    empName:'Parth'
}

console.log(empObj1.empCode);
console.log(empObj1.empName);


                                                    //we can also Extending Interface :

        interface IPreson{
            name : string;
            gender : string;
        }

        interface IEmployee1 extends IPreson {
            empCode : number;
        }

        let yello : IEmployee1 = {

                empCode:1,
                name : 'Parth',
                gender :'Male'
        }

        console.log(yello.empCode);
        console.log(yello.name);
        console.log(yello.gender);


