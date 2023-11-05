"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ControllerDecoration(config) {
    return function (constructor) {
        const current = new constructor();
        const getParent = document.getElementById(config.parent);
        const createElement = document.createElement(config.template);
        createElement.innerHTML = current.content;
        constructor.prototype.element = createElement;
        constructor.prototype.parent = getParent;
        getParent === null || getParent === void 0 ? void 0 : getParent.appendChild(createElement);
    };
}
let MyControllerTitle = class MyControllerTitle {
    constructor() {
        this.content = 'My first try with pseudoangular';
    }
};
MyControllerTitle = __decorate([
    ControllerDecoration({ parent: 'root', template: 'H3' })
], MyControllerTitle);
let MyControllerParagraph = class MyControllerParagraph {
    constructor() {
        this.content = 'paragraph';
    }
};
MyControllerParagraph = __decorate([
    ControllerDecoration({ parent: 'root', template: 'P' })
], MyControllerParagraph);
//# sourceMappingURL=decorators2.js.map