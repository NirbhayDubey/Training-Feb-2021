export interface EmergencyDetail{
    Relation : string,
    Number : number
}

export interface References{
    ReferenceThrough: string,
    Address : string,
    TelephoneNo: number
}
export interface Student{
    studentName :{
        FirstName : string,
        MiddleName : string,
        LastName : string
    };
    dob: Date;
    PlaceOfBirth : string;
    FirstLanguage : string;
    Address :{
        city: string,
        state : string,
        country : string,
        pin : string
    }
    Father :{
        firstName:string,
        middleName : string,
        lastName :string,
        email : string|number,
        educationQualification : string|number,
        Profession:string,
        Designation:string,
        Phone:number

    }

    Mother:{
        firstName:string,
        middleName : string,
        lastName :string,
        email : string|number,
        educationQualification : string|number,
        Profession:string,
        Designation:string,
        Phone:number
    }

Emergency: Array<EmergencyDetail>;

ReferenceDetail : Array<References>;

}