export interface RestaurantList{
    ResId : number;
    Resname: string;
    ResCountry:string;
    ResReservation: string;
    ResAddress :string;
    ResDate:string;
    
}

var resname : RestaurantList[]=
[
    {ResId:1,Resname:"abc",ResCountry:"India",ResAddress:"Rajkot",ResReservation:"yes"   ,ResDate:"1-6-2021"},
    {ResId:2,Resname:"ccc",ResCountry:"India",ResAddress:"Ahmedabad",ResReservation:"no" ,ResDate:"2-6-2021"},
    {ResId:3,Resname:"bbb",ResCountry:"India",ResAddress:"Rajkot",ResReservation:"yes"   ,ResDate:"3-6-2021"},
    {ResId:4,Resname:"aaa",ResCountry:"India",ResAddress:"goa",ResReservation:"no"       ,ResDate:"4-6-2021"},
    {ResId:5,Resname:"xyz",ResCountry:"India",ResAddress:"Surat",ResReservation:"yes"    ,ResDate:"5-6-2021"}
];



export class CheckRestaurant{

    //list of Restaurant  
    restaurantDetail()
    {
        console.log('\n -----------------');

        for (const a of resname)
        console.log(`ResId is : ${a.ResId}, Name of Restaurant is : ${a.Resname}, Restaurant Address : ${a.ResAddress}  ,Country : ${a.ResCountry},Date : ${a.ResDate} `);
    }
}


// //list of Restaurant with the particular Country :
// CheckRestaurant(ResCountry:string){
//     var ResCountry = ResCountry.filter(t=>t.appId == Country);
//     if(ResCountry == null)
//     {
//         console.log('Please Enter Country:');
//     }
//     else{
        
//        console.log(`\nis : ${ResId[0].ResId}, Name is : ${ResI[0].appFname} ${applId[0].appLname}, DOB :${applId[0]} , Address : ${applId[0].appAddress} , FieldInterest  : ${applId[0].Fieldinterest} , MobileNo :${applId[0]} ,CGPA : ${applId[0].appCGPA} `);
//     }
// }
