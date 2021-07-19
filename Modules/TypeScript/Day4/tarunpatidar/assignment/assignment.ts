import {EmpData} from "./empdata";

class EmpFunction
{
    JoingAfterYear(year : number)
    {
        var JoingAfterYear = EmpData.filter(x => x.DOJ.getFullYear() > year);
        console.log(JoingAfterYear);
    }

    GetAll()
    {
        console.log(EmpData);
    }

    GetById (id : number)
    {
        var GetEmpById = EmpData.filter(x => x.ID == id);
        console.log(GetEmpById);
    }

    GetEmpByCityYear (year : number , city : string)
    {
        var JoingAfterYear = EmpData.filter(x => x.DOJ.getFullYear() > year && x.City == city);
        console.log(JoingAfterYear);
    }
}

let data = new EmpFunction();
console.log("===========================");
data.GetAll();
console.log("===========================");
data.GetById(101);
console.log("===========================");
data.JoingAfterYear(2020);
console.log("===========================");
data.GetEmpByCityYear(2020,"Mumbai");