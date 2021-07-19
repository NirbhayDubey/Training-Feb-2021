import {Dept,checkingVacancy} from './Company';
//interview
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
        {intId : 1, intName : '.net' , intVac : 20 ,intHandler : 'RavalSir',intDate:new Date('20/2/2021')},
        {intId : 2, intName : 'node' , intVac : 25 ,intHandler : 'Ranasir',intDate:new Date('25/2/2021')},
        {intId : 3, intName : 'java' , intVac : 20 ,intHandler : 'KrunalSir',intDate:new Date('20/3/2021')}
    ];

    export class checkingInterview{

        interviewDetail()
        {
            console.log('\n List the Department which needs interview ');

            for (const i of inter)
            console.log(`Id is : ${i.intId}, Name is : ${i.intName} , Vacancy  is : ${i.intVac} , Interview Handler is : ${i.intHandler}`);



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
               console.log(`\n ${byId[0].intName} interview is on : ${byId[0].intDate }is conform.`);
          

        }       
    
    }
}