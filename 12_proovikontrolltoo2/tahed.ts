export interface Taheloendaja {
    loeTaht(taht: string): number;
}

export abstract class Tekst implements Taheloendaja {
    abstract kysiSisu(): string;
    
    loeTaht(taht: string): number {
        const sisu = this.kysiSisu();
        let loendur = 0;
        for (let i = 0; i < sisu.length; i++) {
            if (sisu[i].toLowerCase() === taht.toLowerCase()) {
                loendur++;
            }
        }
        return loendur;
    }
}

export class Sona extends Tekst {
    private sisu: string;
    
    constructor(sona: string) {
        super();
        this.sisu = sona;
    }
    
    kysiSisu(): string {
        return this.sisu;
    }
}

export class Lause extends Tekst {
    private sonad: Sona[];

    constructor(lauseTekst: string) {
        super();
        this.sonad = [];
        
        const sonaMap: { [voti: string]: Sona } = {};

        for (const s of lauseTekst.split(" ")) {
            const puhas = s.trim();
            if (puhas.length === 0) continue;

            const voti = puhas.toLowerCase();
            if (!(voti in sonaMap)) {
                sonaMap[voti] = new Sona(puhas);
            }
            this.sonad.push(sonaMap[voti]);
        }
    }

    kysiSisu(): string {
        //tagastab kogu lause kui üks string
        return this.sonad.map(s => s.kysiSisu()).join(" ");
    }
}