export interface onlinereservation{
    ResId:number;
    ResName:string;
    ResAddress:string;
}


var Book:onlinereservation[]=[
    
    { ResId:1,ResName:"abc",ResAddress:"Rajkot"   },
    { ResId:2,ResName:"ccc",ResAddress:"Ahmedabad"},
    { ResId:3,ResName:"bbb",ResAddress:"Rajkot"  } 
];


// let res :Array<onlinereservation> =[];
// console.log("Available Restaurant");

//checkReservation

export class checkReservation{

    ReservationDetail()
    {
        console.log('\n List Of Restaurant which book online reservation:');

        for (const i of Book)
        console.log(`Restarant Id is : ${i.ResId}, Name is : ${i.ResName} , Booking available  : ${i.ResAddress} `);

    }
}

