import { AbstractControl } from '@angular/forms';

export function Validator(dob : AbstractControl) : {[key : string] : any} | null
{
    const min = (new Date().getFullYear() - new Date(dob.value).getFullYear()) < 5;
    const max = (new Date().getFullYear() - new Date(dob.value).getFullYear()) > 20;

    return min || max ? {'DOBValidator' : true} : null;
}