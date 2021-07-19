var emp = [
    { Id: 1, firstName: "jay", lastName: "Prajapati", address: "12,Vijapur,Gujarat,", salary: 50000 },
    { Id: 2, firstName: "Reema", lastName: "Patel", address: "101,culcatta,Banglore", salary: 40000 },
    { Id: 3, firstName: "Reeta", lastName: "Patel", address: "201,Ahmedabad,Gujarat", salary: 30000 },
    { Id: 4, firstName: "Ramesh", lastName: "Sharma", address: "301,Surat,Gujarat", salary: 20000 },
    { Id: 5, firstName: "John", lastName: "Doe", address: "501,Baroda,Gujarat", salary: 10000 },
];
function SearchByIndex(index) {
    console.log(emp[index]);
}
function SearchByEmpID(ID) {
    var e = emp.filter(function (e) { return e.Id == ID; });
    console.log(e);
}
function AddEmployee(e) {
    emp.push(e);
}
function DeleteLastEmployee() {
    return emp.pop();
}
function GetAllEmployee(employees) {
    console.log("ID\tFullName\tAddress\t\tSalary");
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var e = employees_1[_i];
        console.log(e.Id + "\t" + e.firstName + " " + e.lastName + "\t" + e.address.split(',') + "\t" + e.salary);
    }
}
function GetAddressOfEmployee(employees) {
    for (var _i = 0, emp_1 = emp; _i < emp_1.length; _i++) {
        var e = emp_1[_i];
        var add = e.address.split(',');
        for (var _a = 0, add_1 = add; _a < add_1.length; _a++) {
            var s = add_1[_a];
            console.log(s);
        }
    }
}
SearchByIndex(1);
SearchByEmpID(4);
var em = { Id: 5, firstName: "Adam", lastName: "Smith", address: "New York", salary: 15000 };
AddEmployee(em);
GetAllEmployee(emp);
console.log(DeleteLastEmployee());
var newEmp = [
    { Id: 7, firstName: "Bajirao", lastName: "Mastani", address: "22,Channai,TamilNadu", salary: 100000 },
    { Id: 8, firstName: "Tarak", lastName: "Mehta", address: "31,Mumbai,Maharastra", salary: 80000 }
];
var newlist = emp.concat(newEmp);
GetAllEmployee(newlist);
GetAddressOfEmployee(newlist);
