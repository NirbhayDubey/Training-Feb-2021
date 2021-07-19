import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormArray} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/user-name.validator';
import {PasswordValidator} from '../shared/password.validator';



@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
ngOnInit(){
  this.registrationForm = this.fb.group({
    userName : ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/Jay/)]],
    password : [''],
    confirmPassword : [''],
    email : [''],
    subscribe : [false],
    address : this.fb.group({
      city : [''],
      state : [''],
      postalCode : ['']
    }),
    alternateEmails : this.fb.array([])
  },{validator : PasswordValidator});
 this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue =>{
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email?.setValidators(Validators.required);
        }else{
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      })
}


  
   get userName(){
     return this.registrationForm.get('userName');
  }
  

  get email(){
    return this.registrationForm.get('email');
 }

 get alternateEmails(){
   return this.registrationForm.get('alternateEmails') as FormArray;
 }

 addAlternateEmails(){
   this.alternateEmails.push(this.fb.control(''));
 }


  LoadAPIData(){
    this.registrationForm.setValue({
      userName : "Abc",
      email : "abc123@gmail.com",
      subscribe : true,
    password : "Admin",
    confirmPassword : "Admin",
    address : {
      city : "Vijapur",
      state : "Gujarat",
      postalCode : "382870"
    },
    alternateEmails : "abcd1234@gmail.com"
  })
  }

  LoadSomeAPIData(){
    this.registrationForm.patchValue({
      userName : "Jay",
    password : "Admin",
    confirmPassword : "Admin"
    
  })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
  }

  // onSubmit(){
  //   console.log(this.registrationForm.value);
  //   this._registrationService.register(this.registrationForm.value)
  //   .subscribe(
  //     response => console.log('success!', response),
  //     error => console.log('Error!', error)
  //   );
  // }


}
