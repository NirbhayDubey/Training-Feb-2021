namespace Utility{
    export namespace fees{
        export function CalculateLatefees(daysLate:number):number{
            return daysLate*.25;
        }

    }
    export function MaxBooksAllowed(age:number):number{
        if(age<12){
            return 3;
        }
        else{
            return 10;
        }
    }
    function privateFunc(): void{
        console.log("this is private ");
    }
}