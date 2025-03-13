function Keskmine(arv1:number, arv2:number, arv3:number) {
    let arvudeKeskmine: number = 0
    arvudeKeskmine = (arv1 + arv2 + arv3)/3
    return arvudeKeskmine;
}

function Libisev(massiiv: number[] = []): number[]{
    //SMA = n perioodide hindade summa / n --libisev keskmine
    let tulemus:number[]=[];
    for(let i=0; i<massiiv.length-2; i++){
        let keskmine = (massiiv[i]+massiiv[i+1]+massiiv[i+2])/3;
        tulemus.push(keskmine);
    }
    return tulemus;
}

class Arvud{
    massiiv:number[]=[];
    libisevMassiiv: number[]=[];

    lisaArv(arv: number): void {
        this.massiiv.push(arv);
        const n = this.massiiv.length;
        if (n >= 3) {
            const uusKeskmine = (this.massiiv[n-3]+this.massiiv[n-2]+this.massiiv[n-1])/3;
            this.libisevMassiiv.push(uusKeskmine);
        }
    }

    libisevKeskmine(): number[] {
        return this.libisevMassiiv;
    }
}

console.log(Keskmine(2, 6, 9));
console.log(Libisev([1, 4, 7, 3, 3]));

const hoidla = new Arvud();
hoidla.lisaArv(1);
hoidla.lisaArv(4);
hoidla.lisaArv(7);
hoidla.lisaArv(3);
hoidla.lisaArv(3);

console.log(hoidla.libisevKeskmine());