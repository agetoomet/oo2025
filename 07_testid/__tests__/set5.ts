import {textAnalyzer} from "../class2";

test("how many letters", ()=>{
    expect(new textAnalyzer("Apples and bananas").countA()).toBe(5);
    expect(new textAnalyzer("This how many vowels there are, õlu üle ülo õla").countVowels()).toBe(17);
})