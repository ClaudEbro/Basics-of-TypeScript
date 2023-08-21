class Mothers{
    name:string;
    eyes: number;

    constructor (n: string, e:number){
        this.name = n
        this.eyes = e;
    }

    speak(){
        console.log("I introduce myself. I am " +this.name+".");
    }
}

//Create an object based on the class Mothers
let paterson = new Mothers("Paterson",2);
paterson.speak();


//INTERFACE

interface Person {
    name:string;
    readonly eyes: number;
    speak(a: string) : string;   
}

let helein : Person;

helein = {
    name: "Helein",
    eyes: 2,
    speak(a: string):string {
        return a +' '+ this.name;
    }
};

const talkingPerson = (a:Person, b:string) => {
    return a.speak(b);
}

const result = talkingPerson(helein, "My name is");
console.log(result);

//Create a new object referred to the interface
let cyclope : Person = {
    name: "Cyclope",
    eyes: 2,
    speak(a: string):string {
        return a +' '+ this.name;
    }
}


