// Namespace Example
var studentCalc;
(function (studentCalc) {
    function AnualFeeCalc(feeAmount, term) {
        return feeAmount * term;
    }
    studentCalc.AnualFeeCalc = AnualFeeCalc;
})(studentCalc || (studentCalc = {}));
/// <reference path = "./studentCalc.ts"/>
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);
console.log("output: " + TotalFee);
