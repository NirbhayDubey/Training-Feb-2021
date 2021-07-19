import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from '@angular/forms';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  addmissionForm : FormGroup;
  constructor() {
    
    this.addmissionForm = new FormGroup(
      {
        studentName : new FormGroup(
          {
            firstName : new FormControl(),
            middleName : new FormControl(),
            lastName : new FormControl()
          }
        ),

        dob : new FormControl(),
        PlaceOfBirth : new FormControl(),
        FirstLanguage : new FormControl(),

        Address : new FormGroup(
          {
            city : new FormControl(),
            state : new FormControl(),
            country : new FormControl(),
            pin :new FormControl()
          }
        ),

        Father : new FormGroup(
          {
            firstName : new FormControl(),
            middleName : new FormControl(),
            lastName : new FormControl(),
            email : new FormControl(),
            educationQualification : new FormControl(),
            Profession : new FormControl(),
            Designation : new FormControl(),
            Phone : new FormControl()
          }
        ),
        Mother : new FormGroup(
          {
            firstName : new FormControl(),
            middleName : new FormControl(),
            lastName : new FormControl(),
            email : new FormControl(),
            educationQualification : new FormControl(),
            Profession : new FormControl(),
            Designation : new FormControl(),
            Phone : new FormControl()
          }
        ),

        Emergency : new FormArray([
          new FormGroup(
            {
              Relation : new FormControl(),
              Number : new FormControl()
            }
          )
        ]),

        ReferenceDetail : new FormArray([
          new FormGroup (
            {
              ReferenceThrough : new FormControl(),
              Address : new FormControl(),
              TelephoneNo : new FormControl()
            }
          )
        ])

      }
    )
  }
  Add()
  {
    this.getEmergency.push(new FormGroup(
      {
        Relation : new FormControl(),
        Number : new FormControl()
      }
    ) )
  }
  get getEmergency()
  {
    return this.addmissionForm.get("Emergency") as FormArray;
  }

  AddReference()
  {
    this.getReference.push(new FormGroup(
      {
        ReferenceThrough : new FormControl(),
              Address : new FormControl(),
              TelephoneNo : new FormControl()
      }
    ) )
  }
  get getReference()
  {
    return this.addmissionForm.get("ReferenceDetail") as FormArray;
  }

  submitdata()
  {
    console.log(this.addmissionForm.value);
  }

  ngOnInit(): void {
  }

}
