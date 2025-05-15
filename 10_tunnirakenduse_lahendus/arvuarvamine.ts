abstract class Mangija {
  nimi: string;

  constructor(nimi: string) {
    this.nimi = nimi;
  }

  abstract paku(): number;
}

class InimMangija extends Mangija {
  constructor(nimi: string) {
    super(nimi);
  }

  paku(): number {
    const sisend = document.getElementById("pakkumine") as HTMLInputElement;
    return parseInt(sisend.value);
  }
}

class Mäng {
  sihtarv: number;
  katsed: number;
  mangija: Mangija;

  constructor(nimi: string) {
    this.mangija = new InimMangija(nimi);
    this.sihtarv = this.genereeriArv();
    this.katsed = 0;
    this.seaKuularid();

    const tervitus = document.getElementById("tervitus")!;
    tervitus.textContent = `Tere tulemast, ${this.mangija.nimi}! Paku arv vahemikus 1–100.`;

    document.getElementById("manguOsa")!.style.display = "block";
  }

  genereeriArv(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  seaKuularid() {
    document.getElementById("kontrolli")!
      .addEventListener("click", () => this.kontrolli());
    document.getElementById("uusMang")!
      .addEventListener("click", () => this.reset());
  }

  kontrolli() {
    const pakkumine = this.mangija.paku();
    this.katsed++;
    const teade = document.getElementById("teade")!;
    const katsedEl = document.getElementById("katsed")!;

    if (isNaN(pakkumine)) {
      teade.textContent = `${this.mangija.nimi}, palun sisesta korrektne number!`;
      return;
    }

    if (pakkumine < this.sihtarv) {
      teade.textContent = `${this.mangija.nimi}, liiga väike!`;
    } else if (pakkumine > this.sihtarv) {
      teade.textContent = `${this.mangija.nimi}, liiga suur!`;
    } else {
      teade.textContent = `Õige, ${this.mangija.nimi}! Arv oli ${this.sihtarv}.`;
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

document.getElementById("alustaMang")!
  .addEventListener("click", () => {
    const nimiInput = document.getElementById("mangijaNimi") as HTMLInputElement;
    const nimi = nimiInput.value.trim();

    if (nimi === "") {
      alert("Palun sisesta nimi!");
      return;
    }

    // Peida nimesisestuse osa
    document.getElementById("alustaMang")!.setAttribute("disabled", "true");
    nimiInput.setAttribute("disabled", "true");

    new Mäng(nimi);
  });
