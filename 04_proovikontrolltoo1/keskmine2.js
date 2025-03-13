function Keskmine(arv1, arv2, arv3) {
    var arvudeKeskmine = 0;
    arvudeKeskmine = (arv1 + arv2 + arv3) / 3;
    return arvudeKeskmine;
}
function Libisev(massiiv) {
    if (massiiv === void 0) { massiiv = []; }
    //SMA = n perioodide hindade summa / n --libisev keskmine
    var tulemus = [];
    for (var i = 0; i < massiiv.length - 2; i++) {
        var keskmine = (massiiv[i] + massiiv[i + 1] + massiiv[i + 2]) / 3;
        tulemus.push(keskmine);
    }
    return tulemus;
}
console.log(Keskmine(2, 6, 9));
console.log(Libisev([1, 4, 7, 3, 3]));
