//its used for logical grouping of functionalities :
//namespace pratice ;
var carCompany;
(function (carCompany) {
    var car = /** @class */ (function () {
        function car(id, cname, company, price) {
            this.id = id;
            this.cname = cname;
            this.company = company;
            this.price = price;
        }
        car.prototype.display = function () {
            return "Id is " + this.id + " ,Car Name is : " + this.cname + " ,Car Company is : " + this.company + " ,Car Price Is : " + this.price + " ";
        };
        return car;
    }());
    carCompany.car = car;
})(carCompany || (carCompany = {}));
