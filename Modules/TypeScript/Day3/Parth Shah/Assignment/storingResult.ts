     //main file is main.ts in which all files of functions are imported and can call using switch case ://
import {applicants} from './ApplicantsData';


///===================================see result and hiring the employee=================================================//
export interface ResultTime extends applicants {
  
    
    Marks:number;

}


var final : ResultTime[] = [


    {appId : 1, appFnmae : 'Labhu' ,appLname : 'Patel',appDOB : new Date(1999/9/9), appAddress :'Mumbai',appField :'node',appNumber :465464656,appCGPA:8,Marks :12 },
    {appId : 2, appFnmae : 'Bhikhu' ,appLname : 'Chorasiya',appDOB : new Date(1999/8/26), appAddress :'Halvad',appField :'.net',appNumber :465464658,appCGPA:4.5,Marks :32 },
    {appId : 3, appFnmae : 'Jivadaya' ,appLname : 'Gada',appDOB : new Date(1999/9/9), appAddress :'Mumbai',appField :'QA',appNumber :465464659,appCGPA:9.0,Marks :30 },
    {appId : 4, appFnmae : 'Champak' ,appLname : 'Shah',appDOB : new Date(1997/8/9), appAddress :'America',appField :'QA',appNumber :465425646,appCGPA:4.6,Marks :22 },
    {appId : 5, appFnmae : 'Tapu' ,appLname : 'sena',appDOB : new Date(1999/8/15), appAddress :'Mumbai',appField :'node',appNumber :4464664656,appCGPA:8,Marks :26 },
    {appId : 6, appFnmae : 'Pulkit' ,appLname : 'Gada',appDOB : new Date(1999/8/17), appAddress :'Ahemdabad',appField :'QA',appNumber :46546464656,appCGPA:7.6,Marks :35 },
    {appId : 7, appFnmae : 'Sushant' ,appLname : 'Patel',appDOB : new Date(1999/2/2), appAddress :'Lonawala',appField :'.net',appNumber :4654654564,appCGPA:9.8,Marks :39 },
    {appId : 8, appFnmae : 'Shahrukh' ,appLname : 'Khan',appDOB : new Date(1999/9/2), appAddress :'Mumbai',appField :'node',appNumber :465464646,appCGPA:6.4 ,Marks :25},
    {appId : 9, appFnmae : 'Rohit' ,appLname : 'Modi',appDOB : new Date(1999/9/11), appAddress :'Goa',appField :'.net',appNumber :4654646624,appCGPA:8.6 ,Marks :30},

];

export class checkingHiring{


    isHired(){
        console.log('\n============================List the Students who get appropriate marks and selected for Comapny =========================');
        console.log('============================================================================================================================\n');
        for (const res of final){

            if(res.Marks >= 30)
 {
     console.log(`Id: ${res.appId} ${res.appFnmae} ${res.appLname} is selected for ${res.appField}` );
 }

}



}
}