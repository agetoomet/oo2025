export function keskmineKiirus(kiirus1: number, kiirus2: number){
    let aeg = 0;
    let keskKiirus = 0;
    const aeg1 = 1/kiirus1;
    const aeg2 = 1/kiirus2;

    aeg = aeg1 + aeg2;
    keskKiirus = 2 / aeg;

    return keskKiirus;
}