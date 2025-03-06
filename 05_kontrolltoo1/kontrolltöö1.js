function Keskmine(ainepunkt1, hinne1, ainepunkt2, hinne2) {
    //Kaalutud keskmise arvutamisel korrutatakse ainete eest saadud hinnete numbrilised väärtused aine eest saadud 
    // ainepunktide arvuga ning jagatakse läbi ainepunktide koguarvuga.
    var kaalutudKeskmine = 0;
    kaalutudKeskmine = (hinne1 * ainepunkt1 + hinne2 * ainepunkt2) / (ainepunkt1 + ainepunkt2);
    return kaalutudKeskmine;
}
console.log("Kaalutud keskmine on ", Keskmine(3, 4, 5, 5));
