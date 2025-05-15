class Kiri{
    pealkiri: string;
    sisu: string;
    constructor(pealkiri:string, sisu:string){
        this.pealkiri = pealkiri;
        this.sisu = sisu;
    }
}

class KirjadeKogum{
    private kirjad: Kiri[] = []; 

    lisaKiri(kiri: Kiri): void{
        this.kirjad.push(kiri);
    }
}

const kogum = new KirjadeKogum();
const kiri1 = new Kiri("Tere", "See on mu kõige esimene kiri");
const kiri2 = new Kiri("Ilm", "Täna on päikseline ja üsna soe");
kogum.lisaKiri(kiri1);
kogum.lisaKiri(kiri2);
console.log("Kogumis on järgnevad kirjad: ", kogum);