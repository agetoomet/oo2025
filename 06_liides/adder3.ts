interface Adder{
    add(nr:number):void; // method to add anumber
    getSum():number; //method to return current sum
    getAverage():number;
    getRange():number;
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

class StoringAdder implements Adder{
    protected store:number[] =[]; //instead of maintaing a sigle sum, we store each number in an array

    //this will track hw many numbers have been added
    add(nr:number){
        this.store.push(nr); //instead of updating a running total , numbers are stored individually
    } 
    getSum(): number { //return the current sum
        let sum: number=0;
        for(let amount of this.store){sum+=amount;} //iterate through all stored numbers and add them to the sum
        return sum; //there is no this.sum property in this class
    }
    //method to calculate and return the average of all the numbers added
    getAverage():number {
        if(this.store.length>0){   //check if there are any numbers added(count is greater than 0)
            return this.getSum()/this.store.length; //if true calculate and return the value
        }
        return 0;
    }
    //method 
    getRange(){
        if(this.store.length==0){return 0}
        let minimum: number=this.store[0];
        let maximum: number=minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount;}
        }
        return maximum-minimum;
    }
}

let adder1:StoringAdder=new StoringAdder();
let counter1:CharCounter= new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kool");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
//adder1.add(3);
//adder1.add(5);
//adder1.add(8);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());