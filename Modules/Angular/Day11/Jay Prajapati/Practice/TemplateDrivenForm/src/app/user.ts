export class User {

    // TypeScript SortHand Syntax for a Cunstructor
    // TypeScript Compilar Generates public field for
    // each public constructor parameter and Automatically
    // asigns the parameter's value to that field when we 
    // create a new user
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ){}
}
