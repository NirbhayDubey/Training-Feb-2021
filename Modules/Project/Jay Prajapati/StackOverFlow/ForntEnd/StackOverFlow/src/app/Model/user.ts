export interface AppUser{
    UserId? : number,
    FullName? : string,
    Title? : string,
    VisitedDays? : number,
    Reputation? : number,
    GitHub? : string,
    Twitter? : string,
    Location? : string,
    LastSeen? : Date,
    ProfileViews? : number,
    AboutUser? : string,
    ApplicationUserId? : number,
}

export interface loginDetail{
    Username? : string,
    Password? : string
}

export interface registerDetail{
    Username? : string,
    FullName? : string,
    Email? : string,
    Password? : string
}

 