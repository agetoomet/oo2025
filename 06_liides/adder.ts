interface Adder{
    add(nr:number):void; // method to add anumber
    getSum():number; //method to return current sum
    reset():void;
}

class CharCounter{
    //contructor that takes an adder object as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){}
    //add the number of characters in a given to the adder
    //method which designed to take a word (a string)
        addWordCharacters(word: String): void { //use void when not returning anything
            //word.length gives the number of characters in the word
            this.adder.add(word.length);
        }
        // retreive the total character count stored in the adder
        getCharacterCount():number{
            return this.adder.getSum(); //call the getSum() form the adder to get the total count
        }
}

class SimpleAdder implements Adder{
    protected sum:number = 0; //initial sum is 0 
    add(nr:number){this.sum+=nr;} //add the given number to sum 
    getSum(): number { //return the current sum
        return this.sum; 
    }
    reset(){
        this.sum=0;
    }
}

let adder1:Adder=new SimpleAdder();
let counter1:CharCounter= new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kool");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//adder1.add(8);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());