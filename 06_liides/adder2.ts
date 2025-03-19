interface Adder{
    add(nr:number):void; // method to add anumber
    getSum():number; //method to return current sum
    //reset():void;
    getAverage():number;
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

class CountingAdder implements Adder{
    protected sum:number = 0; //initial sum is 0 
    protected count:number = 0; //initialize the count is 0. this will track how many numbers have been added

    add(nr:number){
        this.sum+=nr;
        this.count++; // increment the count to keep track of how many numbers have been aaded
    } //add the given number to sum 
    getSum(): number { //return the current sum
        return this.sum; 
    }
    //method to calculate and return the average of all the numbers added
    getAverage(){
        if(this.count>0){   //check if there are any numbers added(count is greater than 0)
            return this.sum/this.count; //if true calculate and return the value
        }
        return 0;
    }
    //reset(){
        //this.sum=0;
    //}
}

let adder1:Adder=new CountingAdder();
let counter1:CharCounter= new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kool");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
//adder1.add(3);
//adder1.add(5);
//adder1.add(8);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());