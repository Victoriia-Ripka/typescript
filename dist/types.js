"use strict";
let age;
let naame;
let toggle;
let empty;
let notInitialize;
let callback;
let anything;
let some;
let str;
let person;
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
let union;
let literal;
age = 50;
naame = 'Max';
toggle = true;
empty = null;
notInitialize = undefined;
callback = (a) => { return 100 + a; };
anything = -20;
anything = 'Text';
anything = {};
some = 'Text';
person = ['Max', 21];
union = 1;
union = 'string';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=types.js.map