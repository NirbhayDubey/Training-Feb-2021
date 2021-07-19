import { AbstractControl } from "@angular/forms";


export function digitValidator(pin) {
    var valid = /^\d{10}$/.test(pin.value);
    if(valid){
        return null;
    }
    return {"invalidpin":true};
}


export function validateDOB(dob: AbstractControl):{[key:string] : any } | null{
    
    const min = (new Date().getFullYear() - new Date(dob.value).getFullYear()) < 5;
    const max = (new Date().getFullYear() - new Date(dob.value).getFullYear()) > 20;
    
    return min || max ? {'validateDOB':true} : null;
}

 export function pinValidator(pin) {
    var valid = /^\d{6}$/.test(pin.value);
    if(valid){
        return null;
    }
    return {"invalidpin":true};
}


