export interface RestaurantData{
    ResId : number;
    ResName : string;
    QuantityAvailable:Number;
    itemName:string;
    ResDetail:number;
}


var Res : RestaurantData[]  =[
    { ResId: 1, ResName: 'abc',QuantityAvailable: 25,itemName:"rice"  ,ResDetail:999999999},
    { ResId: 1, ResName: 'ccc',QuantityAvailable: 20,itemName:"naan"  ,ResDetail:999999999},
    { ResId: 1, ResName: 'bbb',QuantityAvailable: 25,itemName:"kulcha",ResDetail:999999999}
];


export class Restaurants{

    list(){
        console.log("Hotel List for online order");
        for(const check of Res){
            console.log(`Name of hotel is : ${check.ResName},and contact details are ${check.ResDetail}`);           
        }
    }
}

export class checkAvailabilty{

itemAvailaible()
{
console.log('\n List of Orders which are available  ');

for (const val of Res){

         if(val.QuantityAvailable > 1)
         {
             console.log("Please select proper Quantity");
         }
        }
    }
}



   

