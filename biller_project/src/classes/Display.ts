import { HasHtmlFormat } from "../interfaces/HasHtmlFormat";
import { HasRender } from "../interfaces/hasRender";
import { Storage } from "./Storage";

export class Display implements HasRender {

    formContainer : HTMLDivElement;

    constructor(
        private container: HTMLDivElement,
        private hiddenDiv: HTMLDivElement,
        private btnPrint: HTMLButtonElement
    ){
        this.formContainer = document.getElementById('form-container') as HTMLDivElement;
    }

    render(docObj: HasHtmlFormat, docType: string){

        const htmlString: string = docObj.htmlFormat();
        this.container.innerHTML = htmlString;

        new Storage(docType, htmlString);

        if( docType === 'invoice'){
            this.btnPrint.innerText ="Print the bill";
        }
        else{
            this.btnPrint.innerText ="Print the estimate";
        }

        //Display bill or estimate in the browser
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}