//its used for logical grouping of functionalities :
//namespace pratice ;
var carCompany;
(function (carCompany) {
    class car {
        constructor(id, cname, company, price) {
            this.id = id;
            this.cname = cname;
            this.company = company;
            this.price = price;
        }
        display() {
            return `Id is ${this.id} ,Car Name is : ${this.cname} ,Car Company is : ${this.company} ,Car Price Is : ${this.price} `;
        }
    }
    carCompany.car = car;
})(carCompany || (carCompany = {}));
/// <reference path = "carCompany.ts" />
