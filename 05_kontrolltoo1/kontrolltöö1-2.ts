class Sooritatud{
    public hinded: number[] = [];
    public ainepunktid: number[] = [];
    constructor(hinded:number[],ainepunktid:number[]){
        this.hinded = hinded;
        this.ainepunktid = ainepunktid;
    }

    lisa(hinne:number, ainepunkt:number): void {
        this.hinded.push(hinne);
        this.ainepunktid.push(ainepunkt);
    }
    keskmine(): number {
        //Kaalutud keskmise arvutamisel korrutatakse ainete eest saadud hinnete numbrilised väärtused aine eest saadud 
        // ainepunktide arvuga ning jagatakse läbi ainepunktide koguarvuga.
        
        let summa: number = 0;
        let korrutis: number = 0;
        for(let nr=0; nr<this.ainepunktid.length; nr++){
            summa += this.ainepunktid[nr];
            korrutis += this.hinded[nr]*this.ainepunktid[nr];
        }
        let kaalutudKeskmine:number = 0;
        kaalutudKeskmine = korrutis / summa;
        return kaalutudKeskmine;
    }
}

function koguKlassiKeskmine(ained: Sooritatud[]): number {
    let koguHinneAinepunkt:number = 0;
    let koguAinepunktid:number = 0;
    let koguKeskmine: number = 0;

    for (let aine of ained) {
        for (let i = 0; i < aine.hinded.length; i++) {
            koguHinneAinepunkt += aine.hinded[i] * aine.ainepunktid[i];
            koguAinepunktid += aine.ainepunktid[i];
        }
    }
    koguKeskmine = koguHinneAinepunkt / koguAinepunktid;
    return koguKeskmine;
}

const aine1 = new Sooritatud([3],[6]);
const aine2 = new Sooritatud([4],[6]);
const aine3 = new Sooritatud([5],[3]);
aine1.lisa(3,4);
aine2.lisa(4,6);
aine3.lisa(5,3);

const keskmineHinne = koguKlassiKeskmine([aine1, aine2, aine3]);
console.log("Sooritatud ainete keskmine ", keskmineHinne);