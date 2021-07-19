class StudentInfo<T,U>
{
    private Id: T;
    private Name:U;

    setValue(id:T,name:U):void{
        this.Id=id;
        this.Name=name;
    }
    display():void{
        console.log(`Id=${this.Id},Name=${this.Name}`);
    }
}


let st = new StudentInfo<Number,String>();

st.setValue(101,"viral");
st.display();

let std= new StudentInfo<string,string>();
std.setValue("201","rohit");
std.display();

