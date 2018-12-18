import { GetColumnOfNumber } from "./Utils";

export type CellValue = number | null;
export type Riga = CellValue[];

/**
 * Classe che rappresenta una cartella della tombola composta da 3 righe e 9 colonne
 */
export class Cartella {
  readonly Righe: [Riga, Riga, Riga] = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
  ];

  public SortNumbers(): void {
    const rtmp = this.Righe[0];
    this.Righe[0] = this.Righe[1];
    this.Righe[1] = rtmp;
    for (let col = 0; col < 9; col++) {
      const c1 = this.Righe[0][col];
      const c2 = this.Righe[1][col];
      const c3 = this.Righe[2][col];
      const idealOrder = [c1, c2, c3].filter(c => c != null).sort((a, b) => b - a);
      [c1, c2, c3].forEach((v, i) => {
        if (v == null) {
          return;
        }
        this.Righe[i][col] = idealOrder.pop();
      });
    }
  }

  /**
   * Effettua l'emit in console della rappresentazione della cartella
   */
  public ToConsole() {
    console.log(`=========== ${("  " + this.Numero).substr(-2)} ==========`);
    this.Righe.forEach(r => {
      console.log(r.map(c => ("  " + (c || "")).substr(-2)).join(" | "));
    });
  }

  /**
   * Controlla se la cartella ha una colonna disponibile all'inserimento di un numero
   * @param colonna colonna da testare se disponibile
   * @param incolonna se "true" considera disponibili le colonne con 0 o 1 elemento
   */
  public HasSpaceInColumn(colonna: number, incolonna: boolean): boolean {
    return (this.CountInCol(colonna) <     (incolonna ? 2 : 1)    );
  }
  public CountInCol(colonna: number): number {
    return this.Righe.map(c => c[colonna]).filter(f => f !== null).length;
  }
  /**
   * Cerca una riga che abbia un valore nella colonna x e possa essere popolata nella colonna y
   * @param colFull colonna che deve avere un valore e che può essere tolto
   * @param colFree colonna che non deve avere un valore e che può essere usata
   */
  public GetRowForColButCol(colFull: number, colFree: number): Riga | null {
    if (!this.HasSpaceInColumn(colFree, true)) {
      // se la cartella non ha la colonan libera ritorno null
      return null;
    }
    if (this.HasSpaceInColumn(colFull, true)) {
      // se la cartella ha la colonna da cui togliere il valore libera ritorno null perché non posso togliere il valore
      return null;
    }
    // cerco la riga, se c'è, che ha un valore nella colFull e non lo ha in colFree
    return this.Righe.filter(r => r[colFull] != null && r[colFree] == null)[0];
  }

  /**
   * Controlla se una cartella ha tutti i numeri posizionati (15)
   * @param c cartella da testare se completa
   */
  public IsComplete(): boolean {
    return (
      this.Righe.reduce(
        (a, b) => a + b.reduce((x, y) => x + (y ? 1 : 0), 0),
        0
      ) === 15
    );
  }

  public GetUncompletedInfo() {
    return {
      UncompleteRowIndex: this.Righe.map((r, i) => ({
        Index: i,
        RowFull: this.IsRowFull(i)
      })).filter(r => !r.RowFull)[0].Index,
      FreeColumns: this.GetFreeColumns()
    };
  }

  public GetFreeColumns() {
    return Array(9)
      .fill(0)
      .map((v, i) => i)
      .filter(c => this.HasSpaceInColumn(c, true)).sort((a, b) => this.CountInCol(a) - this.CountInCol(b));
  }

  public IsRowFull(rowIndex: number): boolean {
    return this.Righe[rowIndex].filter(c => c != null).length > 4;
  }

  /**
   * Preleva un numero da una riga/colonna e lo rimpiazza con un null
   * @param riga riga da cui prelevare il numero
   * @param colonna colonna da cui prelevare il numero
   */
  public RimuoviDallaCartella(riga: number, colonna: number): number | null {
    const retVal = this.Righe[riga][colonna];
    this.Righe[riga][colonna] = null;
    return retVal;
  }

  /** prova a posizionare un numero in una cartella incolonnando solo se specificato */
  public PosizionaInCartella(numero: number, incolonna: boolean): boolean {
    const colonna = GetColumnOfNumber(numero);

    if (!this.HasSpaceInColumn(colonna, incolonna)) {
      // colonna piena
      return false;
    }

    for (let r = 0; r < this.Righe.length; r++) {
      if (this.Righe[r].filter(f => f !== null).length === 5) {
        // riga piena
        continue;
      }
      if (this.Righe[r][colonna] !== null) {
        // la cella alla colonna del numero è già occupata
        continue;
      }
      const indiciPieni = this.Righe[r]
        .map((v, i) => (v === null && colonna !== i ? "0" : "1"))
        .join("");
      if (!incolonna && indiciPieni.indexOf("111") >= 0) {
        // la riga conterrebbe 3 numeri affiancati, meglio di no, verranno usati nel giro di riposizionamento
        continue;
      }
      this.Righe[r][colonna] = numero;
      return true;
    }
    return false;
  }

  constructor(readonly Numero: number) {

  }
}
