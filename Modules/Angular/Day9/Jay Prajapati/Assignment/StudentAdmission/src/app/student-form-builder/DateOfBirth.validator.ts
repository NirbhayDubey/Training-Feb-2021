import { AbstractControl,ValidatorFn } from "@angular/forms";

// export const DoBValidator = (maxAge: number): ValidatorFn => control =>
//   (new Date()).getFullYear() - (new Date(control.value)).getFullYear() > maxAge 
//     ? { younger: { maxAge } } 
//     : null;


export function DOBValidator(dob: AbstractControl):{[key:string] : any } | null{
    
    const min = (new Date().getFullYear() - new Date(dob.value).getFullYear()) < 5;
    const max = (new Date().getFullYear() - new Date(dob.value).getFullYear()) > 20;
    
    return min || max ? {'DOBValidator':true} : null;
}