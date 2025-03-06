class Sooritatud {
    hinded: number[] = [];
    ainepunktid: number[] = [];

    // Lisa hinne ja ainepunkt
    lisa(hinne: number, ainepunkt: number): void {
        this.hinded.push(hinne);
        this.ainepunktid.push(ainepunkt);
    }

    // Arvuta kaalutud keskmine
    keskmine(): number {
        let summa = 0;
        let korrutis = 0;
        let keskmine = 0;

        for (let i = 0; i < this.ainepunktid.length; i++) {
            summa += this.ainepunktid[i];
            korrutis += this.hinded[i] * this.ainepunktid[i];
            keskmine = korrutis / summa;
        }

        return keskmine;
    }
}

let aineKogum = new Sooritatud();

// Funktsioon aine lisamiseks ja kuvamiseks
function lisaAine(): void {
    const hinneElement = document.getElementById("hinne") as HTMLSelectElement;
    const ainepunktidElement = document.getElementById("ainepunktid") as HTMLInputElement;

    const hinne = Number(hinneElement.value);
    const ainepunktid = Number(ainepunktidElement.value);

    // Lisa aine andmed
    aineKogum.lisa(hinne, ainepunktid);
}