import {IDcode} from "../class1";

test("gender", ()=>{
    expect(new IDcode("60401170839").gender()).toBe("N");
    expect(new IDcode("50401170839").gender()).toBe("M");
})

test("birth year", ()=>{
    expect(new IDcode("60401170839").birthYear()).toBe(2004);
    expect(new IDcode("38801170839").birthYear()).toBe(1988);
})