var emp = [
    { id: 1, name: 'Parth Shah', city: 'Mumbai', doj: new Date('2016/2/2') },
    { id: 2, name: 'Kush Shah', city: 'Ahemdabad', doj: new Date('2019/1/2') },
    { id: 3, name: 'Hathi Shah', city: 'Haripar', doj: new Date('2020/9/12') },
    { id: 4, name: 'Popat Shah', city: 'Mumbai', doj: new Date('2020/2/2') }
];
//find the employee through index number 
var assignment = /** @class */ (function () {
    function assignment() {
    }
    assignment.prototype.findEmployee = function (ids) {
        var byId = emp.filter(function (t) { return t.id == ids; });
        if (ids == null) {
            console.log('Please Enter Proper EmployeeID :');
        }
        else {
            console.log("\nThe Id: " + byId[0].id + " , Name : " + byId[0].name + ", City : " + byId[0].city + " and DOJ : " + byId[0].doj);
        }
    };
    //Search the employees who has joined after year 2020
    assignment.prototype.findDate = function () {
        console.log('\nList of Employee Who has joined after 2020\n');
        for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
            var d = emp_1[_i];
            if (d.doj > new Date('2020')) {
                console.log(d.name + " is joining after  2020");
            }
        }
    };
    assignment.prototype.findDateAndEmployee = function () {
        console.log('\n List of employee who lives in mumbai and joining in 2020\n');
        for (var _i = 0, emp_2 = emp; _i < emp_2.length; _i++) {
            var da = emp_2[_i];
            if (da.city == 'Mumbai' && da.doj > new Date('2020')) {
                console.log(da.name + " lives in " + da.city + " and joined after 2020");
            }
        }
    };
    return assignment;
}());
var t = new assignment();
t.findDate();
t.findEmployee(1);
t.findDateAndEmployee();
