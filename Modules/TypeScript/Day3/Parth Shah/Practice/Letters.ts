/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class Letters implements StringValidator {
      isAcceptable(s: string) {
        return lettersRegexp.test(s);
      }
    }
  }