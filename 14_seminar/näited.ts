type Toode = {
  nimi: string;
  hind: number;
};

const tooted: Toode[] = [
  { nimi: "Pastakas", hind: 1.5 },
  { nimi: "Vihik", hind: 2.0 },
  { nimi: "Kustutuskumm", hind: 0.5 },
  { nimi: "Kaustik", hind: 3.0 }
];

const kallidTooted = tooted.filter(toode => toode.hind > 1.5);

console.log("Kallid tooted:");
kallidTooted.forEach(toode => {
  console.log(`${toode.nimi} - €${toode.hind}`);
});