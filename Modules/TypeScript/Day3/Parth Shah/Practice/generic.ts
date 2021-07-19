//day 3 Practices Generic :


//=============================Generic Practice =================================//
// it is used to create component which can work with a variety of data type rather than a single one.

//Generic function 

function display<T>(arg:T) : T {
    return arg;
}

let output1 = display<string>("Parth");
let output2 = display<number>(1200);

console.log('================================================================');
console.log(`Welcome ${output1}`);
console.log(`You have moneyr with u : ${output2}`);


//generic class

class studentInfo<T,U>
{
    private Id: T;
    private Name; U;

    setValue(id: T, name: U): void {
        this.Id = id;
        this.Name = name;

    }

    display():void {
        console.log(`Id = ${this.Id},Name = ${this.Name}`);
    }
}

let st = new studentInfo<number, string>();
st.setValue(101,'Brown');
st.display();

let std = new studentInfo<string, string>();
std.setValue('102','Redbhai');
std.display();


//genric interface as fuction type ;
interface studentsInfo<T,U>
{
    (id : T, value: U ): void;
};

function studentData(id:number, value:String) : void {
console.log('================================================================');

    console.log(`Id is ${id} and name is : ${value}`)
}
let stu : studentsInfo<number, string> = studentData;

stu(1,'Parth');
stu(2,'Kush');




