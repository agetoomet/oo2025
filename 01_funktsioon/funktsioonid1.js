function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(181, 110));
var massid = [80, 90, 100, 110, 115];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(181, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
//Looge teine valem kehamassiindeksi arvutamiseks
//1,3 * kehakaal / pikkus astmes 2,5
//aitab käsklus Math.pow
//Arvutage kehamasiindeks mitmesuguste massidega sama pikkuse juures
//näidake, kuidas väärtused erinevad
function kehamassiindeks2(cm, kg) {
    var n = 1.3 * kg;
    return n / Math.pow(cm, 2.5);
}
var indeksid2 = massid.map(function (mass) { return kehamassiindeks2(181, mass); });
console.log(indeksid2);
//for(let mass of massid){
//   console.log(kehamassiindeks2(181, mass));
//}
//arvutage mõlema valemiga sama massi ja eri pikkuste juures
//let pikkused:number[]=[176, 180, 182, 186];
//for(let pikkus of pikkused){
//   console.log(kehamassiindeks2(pikkus, 90));
//}
var vastus = [];
for (var pikkus = 150; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehamassiindeks2(pikkus, 90)]);
}
console.log(vastus);
