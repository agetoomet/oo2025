export class IDcode{
    constructor(protected code:string){}

    gender(){
        return parseInt(this.code[0]) % 2===0? "N": "M";
    }

    birthYear():number {
        const firstDigit = parseInt(this.code[0]);
        const shortYear = parseInt(this.code.substring(1,3));  //substring()inbetween te places
        if(firstDigit===3|| firstDigit===4) return 1900+shortYear;
        if(firstDigit===5 || firstDigit===6) return 2000+shortYear;
        return 1800+shortYear;
    }
}