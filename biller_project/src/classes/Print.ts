import { HasPrint } from '../interfaces/HasPrint.js';
export class Print implements HasPrint {

    constructor(private el: HTMLDivElement){

    }
    print(){
        document.body.innerHTML = this.el.innerHTML;
        window.print(); //To print page's container and refresh it
        document.location.reload() //To reload the page after refreshing and access to the form
    }

}