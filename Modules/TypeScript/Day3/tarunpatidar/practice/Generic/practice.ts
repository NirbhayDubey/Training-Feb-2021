// Generic Function

function display<T>(arg: T): T
{
    return arg;
}

let output1 = display<string>("Welcome");
let output2 = display<number>(100);
console.log(output1);
console.log(output2)


// Generic Class

class StudentInfo<T,U>
{
    private Id: T;
    private Name: U;
    setValue(id: T, name: U): void
    {
        this.Id = id;
        this.Name = name;
    }

    display (): void
    {
    
        console.log(`Id = ${this.Id} Name = ${this.Name}`);

    }
    
}

let st = new StudentInfo<number,string>();
st. setValue(101,"Rohit");
st.display();
let stud = new StudentInfo<number,string>();
stud.setValue(201,"Virat");
stud.display();


// Generics Interface As Function Type

interface StudentInfo1<T,U>
{

    (id: T, value:U): void ;

};

function studentData(id: number, value: string): void
{
    console.log('Id = '+ id + ', \nName = '+ value)
}

let std: StudentInfo1<number, string> = studentData;
std(11,"Rohit Sharma");