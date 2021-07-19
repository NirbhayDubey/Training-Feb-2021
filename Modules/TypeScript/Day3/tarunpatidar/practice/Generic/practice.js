// Generic Function
function display(arg) {
    return arg;
}
var output1 = display("Welcome");
var output2 = display(100);
console.log(output1);
console.log(output2);
// Generic Class
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = " + this.Id + " Name = " + this.Name);
    };
    return StudentInfo;
}());
var st = new StudentInfo();
st.setValue(101, "Rohit");
st.display();
var stud = new StudentInfo();
stud.setValue(201, "Virat");
stud.display();
;
function studentData(id, value) {
    console.log('Id = ' + id + ', \nName = ' + value);
}
var std = studentData;
std(11, "Rohit Sharma");
