var CharCounter = /** @class */ (function () {
    //contructor that takes an adder object as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    //add the number of characters in a given to the adder
    //method which designed to take a word (a string)
    CharCounter.prototype.addWordCharacters = function (word) {
        //word.length gives the number of characters in the word
        this.adder.add(word.length);
    };
    // retreive the total character count stored in the adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); //call the getSum() form the adder to get the total count
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; //initial sum is 0 
        this.count = 0; //initialize the count is 0. this will track how many numbers have been added
        //reset(){
        //this.sum=0;
        //}
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++; // increment the count to keep track of how many numbers have been aaded
    }; //add the given number to sum 
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    //method to calculate and return the average of all the numbers added
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) { //check if there are any numbers added(count is greater than 0)
            return this.sum / this.count; //if true calculate and return the value
        }
        return 0;
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
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
