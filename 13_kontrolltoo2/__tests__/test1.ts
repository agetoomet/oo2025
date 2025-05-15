import { Kiri, Veebiuudis } from "../kirjad2";

describe("Kiri ja Veebiuudis klassid", () => {
    test("Kiri.kirjuta tagastab õige teksti", () => {
        const kiri = new Kiri("Tere", "See on sisu");
        expect(kiri.kirjuta()).toBe("Tere: See on sisu");
    });

    test("Veebiuudis.kirjuta lisab URL-i", () => {
        const uudis = new Veebiuudis("Uudis", "Uus asi juhtus", "https://uudis.ee");
        expect(uudis.kirjuta()).toBe("Uudis: Uus asi juhtus (Loe rohkem: https://uudis.ee)");
    });

    test("Kiri.lisaKiri lisab alamkirja", () => {
        const ema = new Kiri("Peamine kiri", "Ema kiri");
        const laps = new Kiri("Alamkiri", "Lapse kiri");
        ema.lisaKiri(laps);
        expect(ema.kirjad.length).toBe(1);
        expect(ema.kirjad[0]).toBe(laps);
    });
});