//day 3 Practices Generic :
//=============================Generic Practice =================================//
// it is used to create component which can work with a variety of data type rather than a single one.
//Generic function 
function display(arg) {
    return arg;
}
var output1 = display("Parth");
var output2 = display(1200);
console.log('================================================================');
console.log("Welcome " + output1);
console.log("You have moneyr with u : " + output2);
//generic class
var studentInfo = /** @class */ (function () {
    function studentInfo() {
    }
    studentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    studentInfo.prototype.display = function () {
        console.log("Id = " + this.Id + ",Name = " + this.Name);
    };
    return studentInfo;
}());
var st = new studentInfo();
st.setValue(101, 'Brown');
st.display();
var std = new studentInfo();
std.setValue('102', 'Redbhai');
std.display();
;
function studentData(id, value) {
    console.log('================================================================');
    console.log("Id is " + id + " and name is : " + value);
}
var stu = studentData;
stu(1, 'Parth');
stu(2, 'Kush');
