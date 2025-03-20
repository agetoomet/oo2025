export class textAnalyzer{
    constructor(protected text:string){}

    countA():number{
        return (this.text.match(/a/gi) || []).length;  //match(/a/gi) loeb a tähed nii suured kui ka väiksed
    }

    countVowels():number{
        return (this.text.match(/[aeiouõäöü]/gi) || []).length;  //match(/[aeiouõäöü]/gi) loeb kõik loetletud tähed nii suured kui ka väikesed
    }
}