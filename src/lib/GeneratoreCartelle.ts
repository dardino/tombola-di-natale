import { Cartella } from "./Cartella";
import { GetColumnOfNumber } from "./Utils";

export type Serie = [
  Cartella,
  Cartella,
  Cartella,
  Cartella,
  Cartella,
  Cartella
];

export class Generator {
  public static TryToFillSerie(serie: Serie) {
    let sequence = this.RandomizeSequence(serie[0].Numero);
    let unplacedNumbers = this.placeSequence(sequence, serie, false);
    sequence = unplacedNumbers;
    unplacedNumbers = this.placeSequence(sequence, serie, true);
    sequence = unplacedNumbers;
    unplacedNumbers = this.fillUncompleted(sequence, serie);

    if (unplacedNumbers.length > 0) {
      console.log(
        `Non sono riuscito a piazzare i seguenti numeri:`,
        unplacedNumbers
      );
    }
    serie.forEach(c => c.SortNumbers());
    serie.forEach(c => c.ToConsole());
    return unplacedNumbers.length === 0;
  }

  private static fillUncompleted(seq: number[], serie: Serie): number[] {
    const unplacedNumbers: Array<number> = [];
    while (seq.length) {

      const numero = seq[0];
      const colonna = GetColumnOfNumber(numero);
      const firstUncompleted = serie.filter(c => !c.IsComplete())[0];
      const info = firstUncompleted.GetUncompletedInfo();
      let placed = false;

      for (let carx = 0; carx < serie.length; carx++) {
        const cartella = serie[carx];
        const row =  cartella.GetRowForColButCol(info.FreeColumns[0], colonna);
        if (row == null) {
           continue;
        }
        const num2mv = cartella.RimuoviDallaCartella(cartella.Righe.indexOf(row), info.FreeColumns[0]);
        if (num2mv) {
          const mvPlaced = firstUncompleted.PosizionaInCartella(num2mv, true);
          if (mvPlaced) {
            placed = cartella.PosizionaInCartella(numero, true);
            if (placed) {
              break;
            }
          } else {
            unplacedNumbers.push(num2mv);
          }
        }
      }

      if (!placed) {
        unplacedNumbers.push(numero);
      }
      seq.splice(0, 1);
    }
    return unplacedNumbers;
  }

  private static placeSequence(
    sequence: number[],
    serie: Cartella[],
    incolonna: boolean
  ) {
    const unplacedNumbers: Array<number> = [];
    while (sequence.length) {
      const num = sequence[0];
      const placed = this.TryToPlace(serie, num, incolonna);
      if (!placed) {
        unplacedNumbers.push(num);
      }
      sequence.splice(0, 1);
    }
    return unplacedNumbers;
  }

  public static RandomizeSequence(serie: number): Array<number> {
    const ordered = Array(90)
      .fill(0)
      .map((v, i) => i + 1);
    const shuffle: Array<number> = [];
    const firstCardNo = serie % 90;
    for (let i = 0; i < 6; i++) {
      shuffle.push(ordered[firstCardNo - 1]);
      ordered.splice(firstCardNo - 1, 1);
    }
    while (ordered.length) {
      const ix = Math.floor(Math.random() * ordered.length);
      shuffle.push(ordered[ix]);
      ordered.splice(ix, 1);
    }
    return shuffle;
  }

  public static TryToPlace(
    cartelle: Array<Cartella>,
    numero: number,
    incolonna: boolean
  ): boolean {
    for (let c = 0; c < 6; c++) {
      const cartella = cartelle[c];
      const placed = cartella.PosizionaInCartella(numero, incolonna);
      if (placed) {
        return true;
      }
    }
    return false;
  }

  /**
   * restituisce una serie di cartelle a partire dal numero passato come startN
   * se startN non è testa di serie (il primo di una serie da 6) viene usato il numero della testa di serie corrispondente
   * (es. se viene passato 6 la serie è la <1,2,3,4,5,6> ossia "1")
   * (es. se viene passato 1 la serie è la <1,2,3,4,5,6> ossia "1")
   * (es. se viene passato 23 la serie è la <19,20,21,22,23,24> ossia "19")
   * @param startN numero di serie
   */
  public static GetEmptySerie(startN: number): Serie {
    startN = Math.floor((startN - 1) / 6) * 6 + 1;
    return [
      new Cartella(startN + 0),
      new Cartella(startN + 1),
      new Cartella(startN + 2),
      new Cartella(startN + 3),
      new Cartella(startN + 4),
      new Cartella(startN + 5)
    ];
  }
}
