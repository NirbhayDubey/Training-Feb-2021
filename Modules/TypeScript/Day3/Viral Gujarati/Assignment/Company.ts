export interface Dept{
    id : number;
    DeptName : string;
    Vacancies: number;
    description ?: string;
}

//====================================================Creating Vacancies :=======================================================//
    var department : Dept[]  =[
    { id: 1, DeptName: '.net',Vacancies: 23},
    { id: 2, DeptName: 'Java',Vacancies: 12},
    { id: 3, DeptName: 'node',Vacancies: 45},
    { id: 4, DeptName: 'graphics',Vacancies: 1},
    { id: 5, DeptName: 'QA',Vacancies: 45}

    ];



    export class checkingVacancy{

        //it will carry out the name of that department which has higher vacancies than 15:
        vacancyAvailaible()
        {
            console.log('\n List the Department which needs interview ');
            console.log('===================================================================\n');

            for (const val of department){

                           if(val.Vacancies > 15)
                {
                    console.log(`Interview needed for Id: ${val.id} and Dept Name :  ${val.DeptName} and Vacancies are : ${val.Vacancies}` );
                }
              
            }



        }
        
        checkDept()
        {

            //it normally list the department and their vancancies 
            console.log('\nCheck department and their vacancies :');
            console.log('===================================================================\n');

            for (const dep of department)
            console.log(`Id is : ${dep.id}, Name is : ${dep.DeptName} , Vacancy  is : ${dep.Vacancies}`);
        }


        //check vacancies by specific id :
            checkById(id:number){
                //this will check the vacancies for specific dept id:
                var byId = department.filter(t=>t.id == id);
                if(id == null)
                {
                    console.log('Please Enter Proper Id:');
                }
                else{
                    
                   console.log(`\nThe vacancy of ${byId[0].DeptName} is : ${byId[0].Vacancies}`);        

            }
    } 
   
}