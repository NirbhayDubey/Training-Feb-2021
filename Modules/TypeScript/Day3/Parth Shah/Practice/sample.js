//msdn example :
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var Letters = /** @class */ (function () {
        function Letters() {
        }
        Letters.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return Letters;
    }());
    Validation.Letters = Letters;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCode = /** @class */ (function () {
        function ZipCode() {
        }
        ZipCode.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCode;
    }());
    Validation.ZipCode = ZipCode;
})(Validation || (Validation = {}));
/// <reference path="Validation.ts" />
/// <reference path="Letters.ts" />
/// <reference path="ZipCode.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCode();
validators["Letters only"] = new Validation.Letters();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
