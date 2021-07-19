import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Form} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AdmissionForm';
  
  StudentForm:FormGroup;

  constructor(){
    this.StudentForm= new FormGroup({
      Name : new FormGroup({
        FirstName:new FormControl(),
        MiddleName:new FormControl(),
        LastName: new FormControl()
      }),
      DOB : new FormControl(),
      PlaceOfBirth:new FormControl(),
      FirstLanguage:new FormControl(),
      Address:new FormGroup({
        City : new FormControl(),
        State:new FormControl(),
        Pin : new FormControl()
      }),
      Father : new FormGroup({
        Name : new FormGroup({
          FirstName : new FormControl(),
        MiddleName : new FormControl(),
        LastName : new FormControl()
        }),
        Email : new FormControl(),
        EducationQualification : new FormControl(),
        Profession : new FormControl(),
        Designation : new FormControl(),
        Phone : new FormControl(),
      }),
      
  
      Mother : new FormGroup({
          Name : new FormGroup({
          FirstName : new FormControl(),
          MiddleName : new FormControl(),
          LastName : new FormControl()
        }),
        Email : new FormControl(),
        EducationQualification : new FormControl(),
        Profession : new FormControl(),
        Designation : new FormControl(),
        Phone : new FormControl(),
      }),
      EmergencyContactList: new FormArray([
        new FormGroup({
          Relation : new FormControl(),
          Number : new FormControl()
        })
      ]),
      ReferenceDetails : new FormGroup({
        ReferenceThrough : new FormControl(),
        Address : new FormGroup({
          City : new FormControl(),
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
ngOnInit(){}


  
}
