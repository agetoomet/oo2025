function Keskmine(arv1:number, arv2:number, arv3:number) {
    let arvudeKeskmine: number = 0
    arvudeKeskmine = (arv1 + arv2 + arv3)/3
    return arvudeKeskmine;
}

function Libisev(massiiv: number[] = []): number[]{
    //SMA = n perioodide hindade summa / n --libisev keskmine
    let tulemus:number[]=[];
    for(let i=0; i<massiiv.length-2; i++){
        let keskmine = (massiiv[i] + massiiv[i + 1] + massiiv[i + 2]) / 3;
        tulemus.push(keskmine);
    }
    return tulemus;
}

console.log(Keskmine(2, 6, 9));
console.log(Libisev([1, 4, 7, 3, 3]));