"use strict";
class Mothers {
    constructor(n, e) {
        this.name = n;
        this.eyes = e;
    }
    speak() {
        console.log("I introduce myself. I am " + this.name + ".");
    }
}
//Create an object based on the class Mothers
let paterson = new Mothers("Paterson", 2);
paterson.speak();
let helein;
helein = {
    name: "Helein",
    eyes: 2,
    speak(a) {
        return a + ' ' + this.name;
    }
};
const talkingPerson = (a, b) => {
    return a.speak(b);
};
const result = talkingPerson(helein, "My name is");
console.log(result);
//Create a new object referred to the interface
let cyclope = {
    name: "Cyclope",
    eyes: 2,
    speak(a) {
        return a + ' ' + this.name;
    }
};
