//inimene kassina

//funktsioon valib värvused loendist juhusliku kassi värvuse
function juhuslikVärvus(värvused:string[]): string {
    if(värvused.length === 0){
        console.log("Värvivalik on tühi");
        return "värv teadmata";
    }
    const juhuslikIndex =Math.floor(Math.random() * värvused.length);
    return värvused[juhuslikIndex];
}

//funktsioon arvutab inimese vanuse kassiaastates
function kassiAastad(inimeseAasta: number): number {
    if (inimeseAasta <= 0) return 0;
    if (inimeseAasta === 1) return 15;
    if (inimeseAasta === 2) return 24;
    return 24 + (inimeseAasta - 2) * 4;
}

const värvused = ["must", "hall", "oranž", "kirju", "must-valge"];
console.log("Kassi värvus on ", juhuslikVärvus(värvused));

console.log("1 inimese aasta kassiaastates:", kassiAastad(1));  
console.log("2 inimese aasta kassiaastates:", kassiAastad(2)); 
console.log("5 inimese aasta kassiaastates:", kassiAastad(5));  
console.log("10 inimese aasta kassiaastates:", kassiAastad(10));