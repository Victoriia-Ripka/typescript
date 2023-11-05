"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ControllerDecoration(config) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super(...args);
                this.parent = document.getElementById(config.parent);
                this.element = document.createElement(config.template);
                this.element.innerHTML = this.content;
                this.parent.append(this.element);
            }
        };
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
const el1 = new MyControllerTitle();
const el2 = new MyControllerParagraph();
function ShowParams(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function AutoBind(_, _2, descriptor) {
    const method = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return method.bind(this);
        }
    };
}
class Notifier {
    constructor() {
        this.content = 'this message';
    }
    showMassage() {
        console.log(this.content);
    }
}
__decorate([
    ShowParams,
    AutoBind
], Notifier.prototype, "showMassage", null);
const notifier = new Notifier();
const copyShowMessage = notifier.showMassage;
notifier.showMassage();
copyShowMessage();
//# sourceMappingURL=decorators2.js.map