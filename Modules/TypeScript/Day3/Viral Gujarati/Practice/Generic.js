var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id=" + this.Id + ",Name=" + this.Name);
    };
    return StudentInfo;
}());
var st = new StudentInfo();
st.setValue(101, "viral");
st.display();
var std = new StudentInfo();
std.setValue("201", "rohit");
std.display();
