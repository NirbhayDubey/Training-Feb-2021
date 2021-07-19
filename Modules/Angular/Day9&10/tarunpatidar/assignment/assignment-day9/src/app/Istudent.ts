export interface Student 
{
    Name :
    {
        FirstName : string;
        MiddleName : string;
        LastName : string
    };
    DOB : Date;
    PlaceOfBirth : string;
    FirstLanguage : string;
    Address : 
    {
        City : string;
        State : string;
        Pin : string
    }
    Father : 
    {
        Name : 
        {
            FirstName : string;
            MiddleName : string;
            LastName : string
        },
        Email : string,
        EducationQualification : string,
        Profession : string,
        Designation : string,
        Phone : string
    };
    Mother :
    {
        Name : 
        {
            FirstName : string;
            MiddleName : string;
            LastName : string
        },
        Email : string,
        EducationQualification : string,
        Profession : string,
        Designation : string,
        Phone : string
    };
    EmergencyContactList : Array<Emergency>;
    ReferenceDetails :
    {
        ReferenceThrough : string,
        Address : 
        {
            City : string,
            TelNo : string
        }
    }
   
}

export interface Emergency
{
    Relation : string,
    Number : string
}