function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m);
}

console.log(kehamassiindeks(181,110));

let massid:number[]=[80, 90, 100, 110, 115]
for(let mass of massid){
    console.log(kehamassiindeks(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

//Looge teine valem kehamassiindeksi arvutamiseks
//1,3 * kehakaal / pikkus astmes 2,5
//aitab käsklus Math.pow
//Arvutage kehamasiindeks mitmesuguste massidega sama pikkuse juures
//näidake, kuidas väärtused erinevad

function kehamassiindeks2(cm:number, kg:number):number{
    let n:number=1.3*kg
    return n/Math.pow(cm,2.5)
}

let indeksid2:number[]=massid.map(mass => kehamassiindeks2(181, mass));
console.log(indeksid2);

//for(let mass of massid){
 //   console.log(kehamassiindeks2(181, mass));
//}

//arvutage mõlema valemiga sama massi ja eri pikkuste juures

//let pikkused:number[]=[176, 180, 182, 186];
//for(let pikkus of pikkused){
 //   console.log(kehamassiindeks2(pikkus, 90));
//}
let vastus:number[][]=[];
for(let pikkus=150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);