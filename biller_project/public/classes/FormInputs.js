var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Datas } from "../classes/Datas.js";
import { Display } from "./Display.js";
import { Print } from "./Print.js";
import { bind } from "../decorators/Bind.js";
export class FormInput {
    constructor() {
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.town = document.getElementById('town');
        this.zip = document.getElementById('zip');
        this.product = document.getElementById('product');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.vat = document.getElementById('vat');
        //Get some DOM elements
        this.docContainer = document.getElementById('document-container');
        this.hiddenDiv = document.getElementById('hiddenDiv');
        this.storedEl = document.getElementById('stored-data');
        //Get Buttons from the form
        this.btnPrint = document.getElementById("print");
        this.btnReload = document.getElementById("reload");
        this.btnStoredInvoices = document.getElementById("stored-invoices");
        this.btnStoredEstimates = document.getElementById("stored-estimates");
        this.submitFormListener(); //To invoke the submitFormListener when the form is started
        this.printListener(this.btnPrint, this.docContainer); //To invoke the printListener when the form is started
        this.deleteListener(this.btnReload);
        this.getStoredDocsListener();
    }
    //Listeners
    submitFormListener() {
        this.form.addEventListener('submit', this.handleFormSubmit); //To invoke handleFormSubmit
    }
    printListener(btn, docContainer) {
        btn.addEventListener('click', () => {
            let availableDoc;
            availableDoc = new Print(docContainer);
            availableDoc.print();
        });
    }
    deleteListener(btn) {
        btn.addEventListener('click', () => {
            document.location.reload();
            window.scrollTo(0, 0);
        });
    }
    getStoredDocsListener() {
        this.btnStoredInvoices.addEventListener("click", () => this.getItems('invoice'));
        this.btnStoredEstimates.addEventListener("click", () => this.getItems('estimate'));
    }
    getItems(docType) {
        console.log(this); //FormInput
        if (this.storedEl.hasChildNodes()) {
            this.storedEl.innerHTML = "";
        }
        if (localStorage.getItem(docType)) {
            let array;
            array = localStorage.getItem(docType);
            if (array !== null && array.length > 2) {
                let arrayData;
                arrayData = JSON.parse(array);
                arrayData.map((doc) => {
                    let card = document.createElement('div');
                    let cardBody = document.createElement('div');
                    let cardClasses = ['card', 'mt-5'];
                    let cardBodyClasses = 'card-body';
                    card.classList.add(...cardClasses);
                    cardBody.classList.add(cardBodyClasses);
                    //To insert retrieved values in to the DOM
                    cardBody.innerHTML = doc; //To bind the cardBody
                    card.append(cardBody);
                    this.storedEl.append(card);
                });
            }
            else {
                this.storedEl.innerHTML = '<div class="p-5">No Data available !</div>';
            }
        }
    }
    handleFormSubmit(e) {
        e.preventDefault(); //To avoid page's refreshment
        console.log(this); //FormInputs
        const inputs = this.inputData();
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, vat] = inputs;
            //console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, vat);
            let docData;
            let date = new Date();
            docData = new Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, vat, date);
            let template;
            template = new Display(this.docContainer, this.hiddenDiv, this.btnPrint);
            template.render(docData, type);
        }
    }
    //Check some value such numbers
    inputData() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const vat = this.vat.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && vat > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, vat];
        }
        else {
            alert("Number values must be superior to zero (0)");
            return;
        }
    }
}
__decorate([
    bind
], FormInput.prototype, "handleFormSubmit", null);
