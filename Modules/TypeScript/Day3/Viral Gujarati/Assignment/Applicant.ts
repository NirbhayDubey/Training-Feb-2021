// export class Applicant {
//     Id:number;
//     Name:string;

//     constructor(Id:number,Name:string){
//         this.Id =Id;
//         this.Name = Name;
//     }

//     getApplicant(){
//         console.log(`Id:${this.Id},Name:${this.Name}`);

//     }

//     add(ApplicantArray:Applicant[]):void{
//         var item = new Applicant(this.Id,this.Name);
//         ApplicantArray.push(item);
//     }
// }
export interface applicants{
    appId : number,
    appFname: string;
    appLname: string;
    appAddress :string;
    appCGPA : number;
    Fieldinterest:string;
}

var appName : applicants[] = [
    {appId : 1,    appFname : "Viral",    appLname:"Patel",    appAddress :'Ahmedabad',  appCGPA:8  ,   Fieldinterest:"node"},
    {appId : 2,    appFname : "Rahul",    appLname:"Rana",     appAddress :'Rajkot',     appCGPA:6,     Fieldinterest:"java"},
    {appId : 3,    appFname : "Jay",      appLname:"Gujarati", appAddress :'Ahmedabad',  appCGPA:9  ,   Fieldinterest:"node"},
    {appId : 4,    appFname : "Raj",      appLname:"Patel",    appAddress :'Rajkot',     appCGPA:4 ,    Fieldinterest:"node"},
    {appId : 5,    appFname : "Ram",      appLname:"Raval",    appAddress :'Ahmedabad',  appCGPA:8    , Fieldinterest:".net"},
    {appId : 6,    appFname : "Rajesh",   appLname:"Ramani",   appAddress :'Rajkot',     appCGPA:7  ,   Fieldinterest:".net"},
    {appId : 7,    appFname : "Rohit",    appLname:"Raval",    appAddress :'Ahmedabad',  appCGPA:9  ,   Fieldinterest:"node"},
    {appId : 8,    appFname : "Rajvi",    appLname:"Patel",    appAddress :'Rajkot',     appCGPA:6    , Fieldinterest:"java"},
    {appId : 9,    appFname : "Krishna",  appLname:"Rana",     appAddress :'Ahmedabad',  appCGPA:8   ,  Fieldinterest:"node"},
    {appId : 10,   appFname : "Krish",   appLname:"Raval",     appAddress :'Rajkot',     appCGPA:8    , Fieldinterest:".net"}


];

export class checkingApplicants{

    //list of Applicants 
    appicantsDetail()
    {
        console.log('\n List the Applicants for interview ');

        for (const a of appName)
        console.log(`Id is : ${a.appId}, Name is : ${a.appFname} ${a.appLname}, Address : ${a.appAddress}  ,CGPA : ${a.appCGPA} `);
    }

//list of applicants with the particular id :
applicantsById(id:number){
    var applId = appName.filter(t=>t.appId == id);
    if(id == null)
    {
        console.log('Please Enter Proper Id:');
    }
    else{
        
       console.log(`\nId is : ${applId[0].appId}, Name is : ${applId[0].appFname} ${applId[0].appLname}, Address : ${applId[0].appAddress} , FieldInterest  : ${applId[0].Fieldinterest} ,CGPA : ${applId[0].appCGPA} `);
    }
}
//selected for 
isSelected(){
    console.log('\n============================List the Students who is applied  for particular filed =========================');
    for (const sel of appName){

        if(sel.Fieldinterest == 'node')
           {
               console.log(`${sel.appFname} ${sel.appLname}`);
           }
        }
    }
}

