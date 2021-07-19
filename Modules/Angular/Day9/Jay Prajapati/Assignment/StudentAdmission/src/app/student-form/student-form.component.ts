import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  StudentForm:FormGroup;

  constructor(){
    this.StudentForm= new FormGroup({
      Name : new FormGroup({
        FirstName:new FormControl(''),
        MiddleName:new FormControl(''),
        LastName: new FormControl('')
      }),
      DOB : new FormControl(),
      PlaceOfBirth:new FormControl(''),
      FirstLanguage:new FormControl(''),
      Address:new FormGroup({
        City : new FormControl(''),
        State:new FormControl(''),
        Pin : new FormControl()
      }),
      Father : new FormGroup({
        Name : new FormGroup({
          FirstName : new FormControl(''),
        MiddleName : new FormControl(''),
        LastName : new FormControl('')
        }),
        Email : new FormControl(''),
        EducationQualification : new FormControl(''),
        Profession : new FormControl(''),
        Designation : new FormControl(''),
        Phone : new FormControl(),
      }),
      
  
      Mother : new FormGroup({
          Name : new FormGroup({
          FirstName : new FormControl(''),
          MiddleName : new FormControl(''),
          LastName : new FormControl('')
        }),
        Email : new FormControl(''),
        EducationQualification : new FormControl(''),
        Profession : new FormControl(''),
        Designation : new FormControl(''),
        Phone : new FormControl(),
      }),
      EmergencyContactList: new FormArray([
        new FormGroup({
          Relation : new FormControl(''),
          Number : new FormControl()
        })
      ]),
      ReferenceDetails : new FormGroup({
        ReferenceThrough : new FormControl(''),
        Address : new FormGroup({
          City : new FormControl(''),
          TelNo : new FormControl()
        })
        
      })
    });
  }

  get getEmergencyContactList(){
    return this.StudentForm.get('EmergencyContactList') as FormArray;
  }
  
Submit(){
  console.log(this.StudentForm.value);
}
AddList(){
  this.getEmergencyContactList.push(new FormGroup({
    Relation : new FormControl(''),
    Number : new FormControl()
  }));
}

  ngOnInit(): void {
  }

}
