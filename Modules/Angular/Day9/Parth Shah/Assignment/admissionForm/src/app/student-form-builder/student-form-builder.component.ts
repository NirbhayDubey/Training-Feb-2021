import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormArray,FormGroup, Validators} from '@angular/forms';
import {digitValidator, pinValidator, validateDOB} from './validation';
import {EmergencyDetail,Student,References} from './interfaces';

@Component({
  selector: 'app-student-form-builder',
  templateUrl: './student-form-builder.component.html',
  styleUrls: ['./student-form-builder.component.css']
})
export class StudentFormBuilderComponent implements OnInit {
  studentArray :Array<Student> = [];
  addmissionForm : FormGroup;
  constructor(private formBuilder : FormBuilder) {
    
    this.addmissionForm = this.formBuilder.group(
      {
        studentName : this.formBuilder.group(
          {
            firstName :['',Validators.required],
            middleName :['',Validators.required],
            lastName : ['',Validators.required]
          }
        ),

        dob : ['',[Validators.required, validateDOB]],
        PlaceOfBirth : ['',Validators.required],
        FirstLanguage : ['',Validators.required],

        Address : this.formBuilder.group(
          {
            city : ['',Validators.required],
            state :['',Validators.required],
            country : ['',Validators.required],
            pin :['',Validators.compose([Validators.required,pinValidator])]
          }
        ),

        Father : this.formBuilder.group(
          {
            firstName : ['',Validators.required],
            middleName :['',Validators.required],
            lastName : ['',Validators.required],
            email : ['',Validators.compose([Validators.required,Validators.email])],
            educationQualification :['',Validators.required],
            Profession : ['',Validators.required],
            Designation :['',Validators.required],
            Phone : ['',Validators.compose([Validators.required,digitValidator])]
          }
        ),
        Mother :this.formBuilder.group(
          {
            firstName : ['',Validators.required],
            middleName : ['',Validators.required],
            lastName : ['',Validators.required],
            email : ['',Validators.compose([Validators.required,Validators.email])],
            educationQualification : ['',Validators.required],
            Profession : ['',Validators.required],
            Designation :['',Validators.required],
            Phone :['',Validators.compose([Validators.required,digitValidator])]
          }
        ),

        Emergency : new FormArray([
          this.formBuilder.group(
            {
              Relation : ['',Validators.required],
              Number : ['',Validators.compose([Validators.required,digitValidator])]
            }
          )
        ]),

        ReferenceDetail : new FormArray([
          this.formBuilder.group (
            {
              ReferenceThrough : ['',Validators.required],
              Address : ['',Validators.required],
              TelephoneNo :['',Validators.compose([Validators.required,digitValidator])]
            }
          )
        ])

      }
    )
  }
  Add()
  {
    this.getEmergency.push(this.formBuilder.group(
      {
        Relation :['',Validators.required],
        Number : ['',Validators.compose([Validators.required,digitValidator])]
      }
    ) )
  }
  get getEmergency()
  {
    return this.addmissionForm.get("Emergency") as FormArray;
  }

  AddReference()
  {
    this.getReference.push(this.formBuilder.group(
      {
        ReferenceThrough : ['',Validators.required],
              Address : ['',Validators.required],
              TelephoneNo :['',Validators.compose([Validators.required,digitValidator])]
      }
    ) )
  }
  get getReference()
  {
    return this.addmissionForm.get("ReferenceDetail") as FormArray;
  }

  get getFatherPhone()
  {
    return this.addmissionForm.get("Father").get("Phone") ;
  }

  get getFatherEmail()
  {
    return this.addmissionForm.get("Father").get("email");
  }

  get getStudentMiddlename()
  {
    return this.addmissionForm.get("studentName").get("middleName");
  }

  get getStudentFirstName()
  {
    return this.addmissionForm.get("studentName").get("firstName");
  }

  get getStudentLasName()
  {
    return this.addmissionForm.get("studentName").get("lastName");
  }

get getPin()
{
  return this.addmissionForm.get("Address").get("pin");
}

get StudentPob()
{
return this.addmissionForm.get("PlaceOfBirth");
}

get StudentFl()
{
return this.addmissionForm.get("FirstLanguage");
}

get getCity()
{
  return this.addmissionForm.get("Address").get("city");
}

get getCountry()
{
  return this.addmissionForm.get("Address").get("country");
}

get getState()
{
  return this.addmissionForm.get("Address").get("state");
}

get getDob()
{
return this.addmissionForm.get("dob");
}

get getMotherEmail()
{
  return this.addmissionForm.get("Mother").get('email');
}

get getMotherPhone()
{
  return this.addmissionForm.get("Mother").get('Phone');
}



  submitdata()
  {
    console.log(this.addmissionForm.value);
  }
  submit()
  {
    this.studentArray.push(this.addmissionForm.value);
  }


  ngOnInit(): void {
  }

}
