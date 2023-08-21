"use strict";
class Invoice {
    constructor(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
}
//Instanciation
const invoice1 = new Invoice('Claudio', 'Car', 5200);
const invoice2 = new Invoice('Francis', 'Box', 3000);
const invoice3 = { client: "Madelein", product: "Book", price: 2500 };
//Type Array Object
let invoiceArray = [];
invoiceArray.push(invoice1, invoice2, invoice3);
console.log(invoiceArray);
