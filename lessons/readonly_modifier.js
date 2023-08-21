"use strict";
class Car {
    //readonly color: string;
    //public gears: number = 4;
    constructor(color, gears) {
        this.color = color;
        this.gears = gears;
        //this.color = color;
    }
}
let ford = new Car("white", 5);
console.log(ford);
