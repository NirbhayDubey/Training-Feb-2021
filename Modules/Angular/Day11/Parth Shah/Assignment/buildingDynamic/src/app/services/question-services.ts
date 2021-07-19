import { Injectable } from '@angular/core';
import {DropdownQuestion} from '../questions-control-type/question.dropdown';
import { QuestionBase } from '../Models/question-base';
import { TextboxQuestion } from '../questions-control-type/question.textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  constructor() { }

 getpersonalInfoFields()
 {
const question : QuestionBase<string>[] = [
    new DropdownQuestion ({
        key:'gender',
        label:'Gender',
        options:[
            {key:'m',value:'Male'},
            {key:'f',value:'Female'},

        ],
        order:3
    }),

    new TextboxQuestion ({
        key:'firstName',
        label:'FirstName',
        value:'Parth',
        required:true,
        order : 1
    }),


    new TextboxQuestion ({
        key:'lastName',
        label:'LastName',
        value:'Shah',
        required:true,
        order : 2

    }),
    new TextboxQuestion({
        key:  'email',
        label: 'Email',
        type: 'email',
        order: 4
    }),

    new TextboxQuestion({
        key: 'birthdate',
        label: 'Birth Date',
        type: 'date',
        order: 5
    }),
    new TextboxQuestion({
        key: 'phonenumber',
        label: 'Phone Number',
        type: 'number',
        order: 6
    })  
    ,
    new TextboxQuestion({
        key: 'address',
        label: 'Home Address',
        order: 7
    })  
    ,
    new TextboxQuestion({
        key: 'class',
        label: 'Class',
        order: 8
    })  
    ,
    new TextboxQuestion({
        key: 'motherName',
        label: 'Mother\'s Name',

        order: 9
    })  
    ,
    new TextboxQuestion({
        key: 'fatherName',
        label: 'Father\'s Name',

        order: 10
    })  
]

return of(question.sort((a,b)=>a.order - b.order));
 }
 getEducInfoFields(){
    const questions: QuestionBase<string>[] = [
        new TextboxQuestion({
            key: 'grade',
            label: 'Grade',
            type: 'number',
            order: 3
        }),

        new TextboxQuestion({
            key: 'elementarySchool',
            label: 'Elementary School',
            required:  true,
            order: 1,
        }),

        new TextboxQuestion({
            key: 'schoolAddress',
            label: 'School Address',
            required:  true,
            order: 2
        })

        ,
        new DropdownQuestion({
            key: 'course',
            label: 'Course Option 1',
            order:11,
            options: [
                {
                    key: 'cs', value: 'Computer Science'
                },
                {
                    key: 'coe', value: 'Computer Engineering'
                },
                {
                    key: 'it', value: 'Information Technology'
                },
                {
                    key: 'bsa', value: 'Accountancy'
                }
            ],
        })  
        ,
        new DropdownQuestion({
            key: 'course2',
            label: 'Course Option 2',
            order: 12,
            options: [
                {
                    key: 'cs', value: 'Computer Science'
                },
                {
                    key: 'coe', value: 'Computer Engineering'
                },
                {
                    key: 'it', value: 'Information Technology'
                },
                {
                    key: 'bsa', value: 'Accountancy'
                }
            ],
        })  
        ,
        new DropdownQuestion({
            key: 'course3',
            label: 'Course Option 3',
            order: 13,
            options: [
                {
                    key: 'cs', value: 'Computer Science'
                },
                {
                    key: 'coe', value: 'Computer Engineering'
                },
                {
                    key: 'it', value: 'Information Technology'
                },
                {
                    key: 'bsa', value: 'Accountancy'
                }
            ],
           
        })
       ]

       return of(questions.sort((a,b) => a.order - b.order));
}
}
