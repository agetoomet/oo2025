interface book{
    calculate(x:number):number;
    inputUnit():string;
    outputUnit():string;
}

class slowSpeed implements book{
    calculate(wordCount:number, wpm:number = 150): number{
        return wordCount/wpm;
    }
    inputUnit():string{
        return "words";
    }
    outputUnit(): string{
        return "min";
    }
}

class averageSpeed implements book{
    calculate(wordCount:number, wpm:number = 250): number{
        return wordCount/wpm;
    }
    inputUnit():string{
        return "words";
    }
    outputUnit(): string{
        return "min";
    }
}

class fastSpeed implements book{
    calculate(wordCount:number, wpm:number = 400): number{
        return wordCount/wpm;
    }
    inputUnit():string{
        return "words";
    }
    outputUnit(): string{
        return "min";
    }
}