import { Generator } from "./GeneratoreCartelle";

describe("Test generatore sequenza", () => {
  it("Per la serie 1 i primi 6 numeri devono essere in sequenza 1,2,3,4,5,6", () => {
    const expected = [1, 2, 3, 4, 5, 6];
    const actual = Generator.RandomizeSequence(1);
    expected.forEach((v, i) => {
      expect(actual[i]).toBe(v);
    });
  });
  it("devono esserci tutti e 90 numeri", () => {
    const actual = Generator.RandomizeSequence(1);
    expect(actual.sort((a, b) => a - b).every((v, i) => v === i + 1)).toBeTruthy();
  });

  it("se prendo la serie 23 deve ritornare la serie che parte dalla cartella 19", () => {
    const actual = Generator.GetEmptySerie(23);
    expect(actual[0].Numero).toBe(19);
    expect(actual[1].Numero).toBe(20);
    expect(actual[2].Numero).toBe(21);
    expect(actual[3].Numero).toBe(22);
    expect(actual[4].Numero).toBe(23);
    expect(actual[5].Numero).toBe(24);
  });
  it("se prendo la serie 1 deve ritornare la serie che parte dalla cartella 1", () => {
    const actual = Generator.GetEmptySerie(1);
    expect(actual[0].Numero).toBe(1);
    expect(actual[1].Numero).toBe(2);
    expect(actual[2].Numero).toBe(3);
    expect(actual[3].Numero).toBe(4);
    expect(actual[4].Numero).toBe(5);
    expect(actual[5].Numero).toBe(6);
  });
  it("se prendo la serie 7 deve ritornare la serie che parte dalla cartella 7", () => {
    const actual = Generator.GetEmptySerie(7);
    expect(actual[0].Numero).toBe(7);
    expect(actual[1].Numero).toBe(8);
    expect(actual[2].Numero).toBe(9);
    expect(actual[3].Numero).toBe(10);
    expect(actual[4].Numero).toBe(11);
    expect(actual[5].Numero).toBe(12);
  });

  it("devono riuscire a piazzare un solo numero", () => {
    const serie = Generator.GetEmptySerie(1);
    serie[0].Righe[0][0] = 8;
    serie[1].Righe[0][0] = 2;
    serie[2].Righe[0][0] = 3;
    serie[4].Righe[0][0] = 5;
    serie[5].Righe[0][0] = 6;
    const actual = Generator.TryToPlace(serie, 1, false);
    expect(actual).toBeTruthy();
    expect(serie[3].Righe[0][0]).toBe(1);
  });

  it("non devo riuscire a piazzare un numero in colonna", () => {
    const serie = Generator.GetEmptySerie(1);
    serie[0].Righe[0][0] = 1;
    serie[1].Righe[0][0] = 2;
    serie[2].Righe[0][0] = 3;
    serie[3].Righe[0][0] = 4;
    serie[4].Righe[0][0] = 5;
    serie[5].Righe[0][0] = 6;
    const actual = Generator.TryToPlace(serie, 8, false);
    expect(actual).toBeFalsy();
  });

  it("non devo riuscire a piazzare un numero in colonna", () => {
    const serie = Generator.GetEmptySerie(1);
    const actual = Generator.TryToFillSerie(serie);
    expect(actual).toBeTruthy();
  });
});
