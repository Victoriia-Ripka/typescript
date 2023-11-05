"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(par = 'TS') {
    return function (constructor) {
        console.log('Logging... ', par);
        console.log(constructor);
    };
}
function AddProperty() {
    return function (constructor) {
        constructor.prototype.modify = true;
        console.log('added property: ', constructor);
    };
}
let Controller = class Controller {
};
Controller = __decorate([
    Logger()
], Controller);
let Controller2 = class Controller2 {
    constructor() {
        this.modify = false;
    }
};
Controller2 = __decorate([
    AddProperty(),
    Logger('Hello')
], Controller2);
const c1 = new Controller();
const c2 = new Controller2();
console.log('twice decorated: ', c2);
console.log('twice decorated: ', c2.modify);
//# sourceMappingURL=decorators.js.map