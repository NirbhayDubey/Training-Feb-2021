import {checkReservation, onlinereservation} from './Onlinereservation';


export interface orderonline extends onlinereservation{
    orders:string;
}

var order : orderonline[]=[
    { ResId:1,ResName:"abc",ResAddress:"Rajkot"   ,orders: "rice"},
    { ResId:2,ResName:"ccc",ResAddress:"Ahmedabad",orders: "naan"},
    { ResId:3,ResName:"bbb",ResAddress:"Rajkot"   ,orders: "lassi"}
];



export class checkorder{


    isordered(){
        console.log('\nList of items ordered ');
        for (const res of order){

            if(res.orders == null)
          {
              console.log("\n order is empty")
          }
          else{
            console.log(`Your order: ${res.ResId}Restaurant Name ${res.ResName},order is  ${res.orders}` );
          }
        }
    }
}

