function bind(target: any, name: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    let newDescriptor: PropertyDescriptor;
    newDescriptor = {
        get(){
            return originalMethod.bind(this);
        }
    }
    return newDescriptor;
}

class Person {

    userName: string;
    constructor(name: string){
        this.userName = name;
    }

    @bind
    getName(){
        console.log(this.userName); //Here, we will get "undifined" in the browser before applying the decorator and "Claude Arnaud" after applying the decorator @bind.
        console.log(this) // And here, we will get button "click" before applying the decorator and the object Person after applying the decorator @bind.
    }
}

const btn = document.querySelector('button')!;
const claudio = new Person("Claude Arnaud");
//btn.addEventListener('click', () => claudio.getName()); // This function returned "undifined" without the callback fucntion. To solve it, you can apply a decorator to getName() method.

btn.addEventListener('click', claudio.getName);

