var Utility;
(function (Utility) {
    var fees;
    (function (fees) {
        function CalculateLatefees(daysLate) {
            return daysLate * .25;
        }
        fees.CalculateLatefees = CalculateLatefees;
    })(fees = Utility.fees || (Utility.fees = {}));
    function MaxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.MaxBooksAllowed = MaxBooksAllowed;
    function privateFunc() {
        console.log("this is private ");
    }
})(Utility || (Utility = {}));
/// <reference path="utilityFunction.ts" />
// import util = Utility.fees;
var fee = Utility.fees.CalculateLatefees(10);
console.log("fee:" + fee);
