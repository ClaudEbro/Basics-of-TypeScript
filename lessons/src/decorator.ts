//Consider these function and class and you want to associate the function to the class by its constructor.

function Test(constructor: Function){
    console.log(constructor);
}


//You can do it here
@Test
class Car{
    constructor(private n: string, private c: string){}

    carDetails(){
        return `Brand : ${this.n} | Colour : ${this.c}`
    }
}

const ford = new Car("Ford","Red");
console.log(ford.carDetails());