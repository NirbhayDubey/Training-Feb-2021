import {Dept,checkingVacancy} from './company';
        //main file is main.ts in which all files of functions are imported and can call using switch case ://


//==========this department check interviews and create interviews if interview is needed :=============================//
//console.log('\n+++++++++++++++++++++++++++++++++++++ Welcome to interview department Portal +++++++++++++++++++++++++++++++\n');

// let n = new checkingVacancy();
// n.vacancyAvailaible();
// // n.inter(1,45);
// n.checkDept();
// n.checkById(4);


//=============================================creating interviews=======================================================//
 export interface interview {
     intId : number;
     intName : string;
     intVac: number;
     intHandler: string;
     intDate: Date;

}

//create or schedule  interview 
var inter : interview[]=
    [
        {intId : 1, intName : '.net' , intVac : 23 ,intHandler : 'Mr.Mehta', intDate : new Date("2021/2/2")},
        {intId : 1, intName : 'node' , intVac : 45 ,intHandler : 'Mr.Gada', intDate : new Date("2021/2/28")},
        {intId : 1, intName : 'QA' , intVac : 45 ,intHandler : 'Mr.Jaduwala', intDate : new Date("2021/3/9")}


    ];

    export class checkingInterview{

        interviewDetail()
        {
            console.log('\n List the Department which needs interview ');
            console.log('===================================================================\n');

            for (const i of inter)
            console.log(`Id is : ${i.intId}, Name is : ${i.intName} , Vacancy  is : ${i.intVac} , Interview Handler is : ${i.intHandler} , interview Date is : ${i.intDate}`);



        }

        //checking sppecific interview handler for specific department

        checkByName(dept:string){
            var byId = inter.filter(t=>t.intName == dept);
            if(dept == null)
            {
                console.log('Please Enter Proper Department name:');
            }
            else{
                console.log('\n=======checking interview Handler for particular department============');
                
               console.log(`\nThe Interview handler of ${byId[0].intName} is : ${byId[0].intHandler}`);
          

        }
        
    }
        //checking interview date for particular department


        checkDate(dept:string){
            var byId = inter.filter(t=>t.intName == dept);
            if(dept == null)
            {
                console.log('Please Enter Proper Department name:');
            }
            else{
                
                console.log('\n=======checking interview date for particular department============');
               console.log(`\n ${byId[0].intName} interview is on : ${byId[0].intDate}`);
          

        }       
    
    }



}


// let i = new checkingInterview();
// i.interviewDetail();
// i.checkByName('node');
// i.checkDate('node');
