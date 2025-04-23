abstract class Mangija {
  nimi: string;
  constructor(nimi: string) {
    this.nimi = nimi;
  }
  abstract paku(): number;
}

class InimMangija extends Mangija {
  paku(): number {
    const sisend = document.getElementById("pakkumine") as HTMLInputElement;
    return parseInt(sisend.value);
  }
}

class Mäng {
  sihtarv: number;
  katsed: number;
  mangija: Mangija;

  constructor() {
    this.mangija = new InimMangija("Mängija");
    this.sihtarv = this.genereeriArv();
    this.katsed = 0;
    this.seaKuularid();
  }

  genereeriArv(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  seaKuularid() {
    document.getElementById("kontrolli")!.addEventListener("click", () => this.kontrolli());
    document.getElementById("uusMang")!.addEventListener("click", () => this.reset());
  }

  kontrolli() {
    const pakkumine = this.mangija.paku();
    this.katsed++;
    const teade = document.getElementById("teade")!;
    const katsedEl = document.getElementById("katsed")!;

    if (isNaN(pakkumine)) {
      teade.textContent = "Palun sisesta korrektne number!";
      return;
    }

    if (pakkumine < this.sihtarv) {
      teade.textContent = "Liiga väike!";
    } else if (pakkumine > this.sihtarv) {
      teade.textContent = "Liiga suur!";
    } else {
      teade.textContent = `Õige! Arv oli ${this.sihtarv}.`;
    }

    katsedEl.textContent = `Katsed: ${this.katsed}`;
  }

  reset() {
    this.sihtarv = this.genereeriArv();
    this.katsed = 0;
    (document.getElementById("pakkumine") as HTMLInputElement).value = "";
    document.getElementById("teade")!.textContent = "";
    document.getElementById("katsed")!.textContent = "";
  }
}

const mäng = new Mäng();
