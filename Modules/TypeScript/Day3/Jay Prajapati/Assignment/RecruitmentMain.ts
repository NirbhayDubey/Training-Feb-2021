import {Dept,checkingVacancy} from './Company';
import{ResultTime,checkingHiring} from './Result';
import {applicants, checkingApplicants} from './Applicant';
import { checkingInterview } from './Interview';

let n = new checkingVacancy();
let m = new checkingInterview();
let o = new checkingApplicants();
let p = new checkingHiring();
//make switch case here:

let op : number = 2 ; //you can change your case from here
switch(op) {
    
  //vacancy detail 
    case 1 : console.log('Will Show Vacancy For Interview :');
    n.vacancyAvailaible();
    break;

                    
    case 2 : console.log('List of the department and their vancancies :');
    n.checkDept();
    break;

    case 3 : console.log('check vacancies by ID :');
    n.checkById(2);
    break;

    //interview details

    case 4 : console.log('List of interview detail:');
    m.interviewDetail();
    break;

    case 5 : console.log('Interview By Particular Hr who will take Interview:' );
    m.checkByName('node');
    break;

    case 6 : console.log('checking interview date for any particular department interview :');
    m.checkDate('Python');
    break;

    //storing applicants data detail :
    case 7 : console.log('List the data of Applicants for interview');
    o.appicantsDetail();
    break;

    case 8 : console.log('Get details of applicants by its ID');
    o.applicantsById(2);
    break;

    case 9 : console.log('Get details of particular field like .net , node or Python');
    o.isSelected();
    break;

    //get the interview output

    case 10 : console.log('Check result who are selected in interview');
    console.log('Those candidate are selected whoose mark is above or equal to 30:');
    p.isHired();
    break;

    default:
    console.log("No such number exists!");
    break;   // case 11
}