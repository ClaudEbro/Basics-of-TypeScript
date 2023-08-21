class Car {
    //readonly color: string;
    //public gears: number = 4;

    constructor(readonly color: string, public gears: number){
        //this.color = color;
    }
}

let ford = new Car("white",5);
console.log(ford);