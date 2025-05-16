var tooted = [
    { nimi: "Pastakas", hind: 1.5 },
    { nimi: "Vihik", hind: 2.0 },
    { nimi: "Kustutuskumm", hind: 0.5 },
    { nimi: "Kaustik", hind: 3.0 }
];
var kallidTooted = tooted.filter(function (toode) { return toode.hind > 1.5; });
console.log("Kallid tooted:");
kallidTooted.forEach(function (toode) {
    console.log("".concat(toode.nimi, " - \u20AC").concat(toode.hind));
});
