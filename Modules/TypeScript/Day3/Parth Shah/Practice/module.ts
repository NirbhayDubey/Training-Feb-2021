//its used because  we have multiples files in the project , the variabe function etc in one file are accessibe for other files:

//practice module :
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

export enum myConstants{
    pi=3.14,
    e=2.7,
    log2=0.3,
    log5=0.5
}

//you can also give export like this :
//export{car,myConstants}

