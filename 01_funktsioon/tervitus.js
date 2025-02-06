var eesnimi = "Juku";
//let eesnimi:string=56;
var vanus = 7;
console.log("abc");
console.log("Tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    console.log("Osta pilet");
    //Teata, kas tuleb osta lapsepilet või täiskasvanu pilet
    if (vanus >= 7) {
        console.log("Osta lapsepilet");
    }
    else if (vanus >= 18) {
        console.log("Osta täispilet");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
