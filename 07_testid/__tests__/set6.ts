import {calculator} from "../calculator"

let calcobj: calculator=null;

beforeEach(()=>{        //new value before each answer
    calcobj=new calculator;
});

test("empty int", ()=>{
    expect(calcobj.getPanelContents()).toBe("");
});

test("simple input", ()=>{
    calcobj.pressButton("8");
    calcobj.pressButton("7");

    expect(calcobj.getPanelContents()).toBe("87");
})