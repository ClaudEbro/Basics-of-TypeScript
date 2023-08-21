"use strict";
class Mother {
    constructor(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    speak() {
        console.log(`I am ${this.name} and I have ${this.hair} hair.`);
    }
}
//Inheritance
class Children extends Mother {
    speak() {
        console.log(`Je suis ${this.name} et j'ai des cheveux de couleur ${this.hair}.`);
    }
    speakMotherTongue() {
        super.speak(); //To invoke inherited method
    }
}
const person1 = new Mother("Marie", "brown", 2); //Type Mother
console.log(person1);
person1.speak();
//const person2 = new Children("John", "marron", 2); //Type Children
//console.log(person2);
//person2.speak();
//person2.speakMotherTongue();
//Change the type of person2
const person2 = new Children("John", "marron", 2);
person2.speak();
