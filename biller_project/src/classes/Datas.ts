import { HasHtmlFormat } from "../interfaces/HasHtmlFormat.js";

export class Datas implements HasHtmlFormat {
    constructor(
        private documentType: string,
        private firstName: string,
        private lastName: string,
        private address: string,
        private country: string,
        private town: string,
        private zip: number,
        private product: string,
        private price: number,
        private quantity: number,
        private vat: number,
        private date: Date,
    ){}

    private subtotal(price: number, quantity:number, vat:number): number {
        const vatPercent = vat/100;
        const totalVat = price * vatPercent;
        return (price + totalVat)*quantity; // Tax included
    }
        
    htmlFormat(){
        //Calculate the subtotal included tax
        const totalPrice = this.subtotal(this.price, this.quantity, this.vat);
        return`<div class="row p-5">
                    <div class="col-md-6">
                        <h2 class="text-left">LOGO</h2>
                    </div>
                    <div class="col-md-6 text-right">
                        <p class="font-weight-bold mb-1">${this.documentType === "invoice" ?"Bill":"Estimate"}<span class="font-weight-normal"> N°${Math.floor(Math.random()*101)}</span></p>
                        <p class="font-weight-bold mb-1">Date <span class="font-weight-normal">${this.date.toLocaleDateString()}</span></p>
                    </div>
                </div>

            <div class="row pb-5 p-5">
                <div class="col-sm-6 text-left">
                    <p class="font-weight-bold">BRO SOFT INC</p>
                    <p class="mb-1">Boulevard Houphouet Boigny</p>
                    <p>14 500 - Abidjan</p>
                    <p class="mb-1">Phone: 27.20.00.00.00</p>
                </div>

                <div class="col-sm-6 text-right">
                    <p class="font-weight-bold">Client Details</p>
                    <p class="mb-1">Mr/Mrs ${this.firstName} ${this.lastName}</p>
                    <p class="mb-1">${this.address}</p>
                    <p>${this.zip}</p>
                    <p>${this.town}</p>
                    <p>${this.country}</p>
                </div>
            </div>

        <div class="row p-5">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="border-0 text-uppercase small font-weight-bold">Product/Service</th>
                            <th class="border-0 text-uppercase small font-weight-bold">Unit Price DF</th>
                            <th class="border-0 text-uppercase small font-weight-bold">Quantity</th>
                            <th class="border-0 text-uppercase small font-weight-bold">Total DF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${this.product}</td>
                            <td>${this.price} XOF DF</td>
                            <td>${this.quantity}</td>
                            <td>${this.price * this.quantity} XOF DF</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="d-flex flex-row-reverse bg-light p-4">
            <div class="py-3 px-5">
                <div class="mb-2">TOTAL IT</div>
             <div class="h2 font-weight-light">${totalPrice.toFixed(2)} XOF</div>
            </div>
        </div>`
    }        
        
}