var Employee = [
    { ID: 101, FirstName: "Tarun", LastName: "Patidar", Address: "Manawar", Salary: 50000 },
    { ID: 102, FirstName: "Parth", LastName: "Shah", Address: "Ahmedabad", Salary: 40000 },
    { ID: 103, FirstName: "Shivam", LastName: "Dashore", Address: "Indore", Salary: 30000 },
    { ID: 104, FirstName: "Bharat", LastName: "Patidar", Address: "Manawar", Salary: 20000 },
    { ID: 105, FirstName: "Rohan", LastName: "Nagar", Address: "Khargon", Salary: 10000 }
];
console.log("Search Employee by EmployeeID");
console.log("Record of ID 1:");
var employee = Employee.filter(function (e) { return e.ID == 1; });
console.log(employee);
console.log("Add new Employee");
var len = Employee.length;
Employee.push({ ID: 106, FirstName: "John", LastName: "abc", Address: "UK", Salary: 15000 });
if (Employee.length > len) {
    console.log("Data Inserted Successfully");
    for (var _i = 0, Employee_1 = Employee; _i < Employee_1.length; _i++) {
        var item = Employee_1[_i];
        console.log(item);
    }
}
console.log("Deleting the EmployeeID 5");
var deleteRecord = Employee.splice(4, 1);
console.log(deleteRecord);
for (var _a = 0, Employee_2 = Employee; _a < Employee_2.length; _a++) {
    var item = Employee_2[_a];
    console.log(item);
}
var emp = [{ ID: 107, FirstName: "Smith", LastName: "ab", Address: "US", Salary: 25000 }];
console.log("Inserting new employees");
Employee = Employee.concat(emp);
for (var _b = 0, Employee_3 = Employee; _b < Employee_3.length; _b++) {
    var item = Employee_3[_b];
    console.log(item);
}
console.log("Employee Record");
for (var _c = 0, Employee_4 = Employee; _c < Employee_4.length; _c++) {
    var item = Employee_4[_c];
    var add = item.Address;
    var address = add.split(',');
    var PF = Number(item.Salary) * 0.12;
    console.log("ID: " + item.ID + " \t EmployeeName: " + item.FirstName + " " + item.LastName + " \t Address: " + item.Address);
    console.log("\t\tSalary: Basic Salary " + item.Salary + " PF:" + PF);
    console.log(" ");
}
