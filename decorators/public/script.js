"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function bind(target, name, descriptor) {
    const originalMethod = descriptor.value;
    let newDescriptor;
    newDescriptor = {
        get() {
            return originalMethod.bind(this);
        }
    };
    return newDescriptor;
}
class Person {
    constructor(name) {
        this.userName = name;
    }
    getName() {
        console.log(this.userName); //Here, we will get "undifined" in the browser before applying the decorator and "Claude Arnaud" after applying the decorator @bind.
        console.log(this); // And here, we will get button "click" before applying the decorator and the object Person after applying the decorator @bind.
    }
}
__decorate([
    bind
], Person.prototype, "getName", null);
const btn = document.querySelector('button');
const claudio = new Person("Claude Arnaud");
//btn.addEventListener('click', () => claudio.getName()); // This function returned "undifined" without the callback fucntion. To solve it, you can apply a decorator to getName() method.
btn.addEventListener('click', claudio.getName);
