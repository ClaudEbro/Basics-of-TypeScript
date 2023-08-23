import { HasSetItem } from '../interfaces/HasSetItem';
export class Storage implements HasSetItem{

    OldData: string[] = [];

    constructor(typeVal: string, htmlString: string){
        this.setItem(typeVal, htmlString);
    }

    static checkLocalStorage(): void{
        if(localStorage.getItem('invoice') === null){
            localStorage.setItem('invoice', '[]');
        }
        if(localStorage.getItem('estimate') === null){
            localStorage.setItem('estimate', '[]');
        }

    }

    //To inject the generated template in to the LocalStorage
    setItem(typeVal: string, htmlString: string): void {
        let array: string | null;
        array = localStorage.getItem(typeVal);
        if(array !== null){
            this.OldData = JSON.parse(array);
            this.OldData.push(htmlString);
            localStorage.setItem(typeVal, JSON.stringify(this.OldData));
        } else {
            document.location.reload();
        }
    }
}