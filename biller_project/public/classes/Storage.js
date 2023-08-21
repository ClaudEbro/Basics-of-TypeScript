export class Storage {
    constructor(typeVal, htmlString) {
        this.OldData = [];
        this.setItem(typeVal, htmlString);
    }
    static checkLocalStorage() {
        if (localStorage.getItem('invoice') === null) {
            localStorage.setItem('invoice', '[]');
        }
        if (localStorage.getItem('estimate') === null) {
            localStorage.setItem('estimate', '[]');
        }
    }
    //To inject the generated template in to the LocalStorage
    setItem(typeVal, htmlString) {
        let array;
        array = localStorage.getItem(typeVal);
        if (array !== null) {
            this.OldData = JSON.parse(array);
            this.OldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.OldData));
        }
        else {
            document.location.reload();
        }
    }
}
