//its used for logical grouping of functionalities :

//namespace pratice ;

namespace carCompany
{
export class car 
{
    id: number;
    cname : string;
    company:string;
    price: number;
    constructor(id :number, cname: string,company : string, price: number)
{
 
    this.id = id;
    this.cname = cname;
    this.company = company;
    this.price = price;

}

display()
{
    return `Id is ${this.id} ,Car Name is : ${this.cname} ,Car Company is : ${this.company} ,Car Price Is : ${this.price} `
}

}
}
