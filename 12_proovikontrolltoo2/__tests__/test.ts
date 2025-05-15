import { Sona, Lause } from "../tahed";

describe('Sona', () => {
    const testSona = 'pere';
    let sona: Sona;

    beforeEach(() => {
        sona = new Sona(testSona);
    });

    test('peaks loendama "p" tähte sõnas "pere"', () => {
        expect(sona.loeTaht('p')).toBe(1);
    });
    
    test('peaks loendama "e" tähte sõnas "pere"', () => {
        expect(sona.loeTaht('e')).toBe(2);
    });
    
    test('peaks loendama "r" tähte sõnas "pere"', () => {
        expect(sona.loeTaht('r')).toBe(1);
    });
    
    test('peaks loendama "a" tähte sõnas "pere"', () => {
        expect(sona.loeTaht('a')).toBe(0);
    });
    
    test('peaks tagastama õige sisu kysiSisu meetodiga', () => {
        expect(sona.kysiSisu()).toBe('pere');
    });
});

describe('Lause', () => {
    test('peaks loendama tähti tühjas lauses', () => {
        const lause = new Lause("");
        expect(lause.loeTaht('a')).toBe(0);
        expect(lause.kysiSisu()).toBe("");
    });

    test('peaks loendama tähti ühesõnalises lauses', () => {
        const lause = new Lause("kodu");
        expect(lause.loeTaht('k')).toBe(1);
        expect(lause.loeTaht('o')).toBe(1);
        expect(lause.loeTaht('d')).toBe(1);
        expect(lause.loeTaht('u')).toBe(1);
        expect(lause.loeTaht('z')).toBe(0);
        expect(lause.kysiSisu()).toBe("kodu");
    });

    test('peaks loendama tähti mitme sõnaga lauses', () => {
        const lause = new Lause("minu kodu on siin");
        expect(lause.loeTaht('i')).toBe(3);
        expect(lause.loeTaht('n')).toBe(3);
        expect(lause.loeTaht('u')).toBe(2);
        expect(lause.loeTaht('m')).toBe(1);
        expect(lause.kysiSisu()).toBe("minu kodu on siin");
    });

    test('peaks loendama tähti suurte ja väikeste tähtedega lauses', () => {
        const lause = new Lause("Tallinn on Eesti Pealinn");
        expect(lause.loeTaht('t')).toBe(2);
        expect(lause.loeTaht('T')).toBe(2);
        expect(lause.loeTaht('n')).toBe(5);
        expect(lause.loeTaht('N')).toBe(5);
    });

    test('peaks õigesti käsitlema mitut tühikut', () => {
        const lause = new Lause("tere  hommikust  kõigile");
        expect(lause.loeTaht('e')).toBe(3);
        expect(lause.loeTaht('i')).toBe(3);
    });
    
   test('kasutatakse sama Sona objekti korduvate sõnade jaoks', () => {
    const lause = new Lause("kass ja kass ja koer");

    const sonad = (lause as any).sonad as Sona[]; // tüübikastitus, kui sonad on privaatne

    const kassid = sonad.filter(s => s.kysiSisu() === "kass");
    const jad = sonad.filter(s => s.kysiSisu() === "ja");
    const koerad = sonad.filter(s => s.kysiSisu() === "koer");

    expect(kassid[0]).toBe(kassid[1]);
    expect(jad[0]).toBe(jad[1]);
    expect(koerad.length).toBe(1);
});
});