class MotherClass {

    constructor(public name: string, private hair:string, protected eyes:number){
    
    }

    private speak(){
        console.log(`I am ${this.name} and I have ${this.hair} hair.`);
    }

    //getter
    getName(){
        return this.name;
    }

    getHair(){
        return this.hair;
    }

    //setter
    setHairColor(newColor: string){
        this.hair = newColor;
    }
}

class Child extends MotherClass{
    /**
     * Accessibility
     * 
     * Public: OK
     * Private:MotherClass NO
     * Protected: OK
     */
    getData(){
        return this.eyes;
    }
}

const pers1 = new MotherClass("Madelein", "marron", 2);
const pers2 = new Child('Boris','Black', 2);
console.log(pers2.getData()); 
