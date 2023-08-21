"use strict";
class MotherClass {
    constructor(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    speak() {
        console.log(`I am ${this.name} and I have ${this.hair} hair.`);
    }
    //getter
    getName() {
        return this.name;
    }
    getHair() {
        return this.hair;
    }
    //setter
    setHairColor(newColor) {
        this.hair = newColor;
    }
}
class Child extends MotherClass {
    /**
     * Accessibility
     *
     * Public: OK
     * Private:MotherClass NO
     * Protected: OK
     */
    getData() {
        return this.eyes;
    }
}
const pers1 = new MotherClass("Madelein", "marron", 2);
const pers2 = new Child('Boris', 'Black', 2);
console.log(pers2.getData());
