import{kasPositiivne} from "../f1";

test("positiivus", ()=>{
    expect(kasPositiivne(5)).toBe(true);
    expect(kasPositiivne(-1)).toBe(false);
    expect(kasPositiivne(0)).toBe(false);
});