export class Kiri{
    pealkiri: string;
    sisu: string;
    kirjad: Kiri[] = []
    constructor(pealkiri:string, sisu:string){
        this.pealkiri = pealkiri;
        this.sisu = sisu;
    }

    lisaKiri(kiri: Kiri): void{
        this.kirjad.push(kiri);
    }

    kirjuta() {
        return `${this.pealkiri}: ${this.sisu}`;
    }
}

export class Veebiuudis extends Kiri{
    URL: string;

    constructor(pealkiri: string, sisu: string, URL: string) {
        super(pealkiri, sisu);
        this.URL = URL;
    }
    kirjuta() {
        return `${this.pealkiri}: ${this.sisu} (Loe rohkem: ${this.URL})`;
    }
}