import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Output() userData = new EventEmitter();  
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

        dob : ['',Validators.required],
        PlaceOfBirth : ['',Validators.required],
        FirstLanguage : ['',Validators.required],

        Address : this.formBuilder.group(
          {
            city : ['',Validators.required],
            state :['',Validators.required],
            country : ['',Validators.required],
            pin :['',Validators.required]
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
            Phone : ['',Validators.required]
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
            Phone :['',Validators.required]
          }
        ),

        Emergency : new FormArray([
          this.formBuilder.group(
            {
              Relation : ['',Validators.required],
              Number : ['',Validators.required]
            }
          )
        ]),

        ReferenceDetail : new FormArray([
          this.formBuilder.group (
            {
              ReferenceThrough : ['',Validators.required],
              Address : ['',Validators.required],
              TelephoneNo :['',Validators.required]
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
        Number : ['',Validators.required]
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
              TelephoneNo :['',Validators.required]
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
    this.userData.emit(this.studentArray);
  }


  ngOnInit(): void {
  }

}
