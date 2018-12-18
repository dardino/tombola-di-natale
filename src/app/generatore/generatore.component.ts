import { Component, OnInit } from "@angular/core";
import { Serie } from "src/lib/GeneratoreCartelle";

@Component({
  selector: "tdn-generatore",
  templateUrl: "./generatore.component.html",
  styleUrls: ["./generatore.component.styl"]
})
export class GeneratoreComponent implements OnInit {
  serie: Array<Serie> = [];

  constructor() {
    this.serie.push(this.getEmptySerie(1));
    this.serie.push(this.getEmptySerie(7));
    this.serie.push(this.getEmptySerie(13));
    this.serie.push(this.getEmptySerie(19));
    this.serie.push(this.getEmptySerie(25));
    this.serie.push(this.getEmptySerie(31));
    this.serie.push(this.getEmptySerie(37));
    this.serie.push(this.getEmptySerie(43));
    this.serie.push(this.getEmptySerie(49));
    this.serie.push(this.getEmptySerie(55));
    this.serie.push(this.getEmptySerie(61));
    this.serie.push(this.getEmptySerie(67));
    this.serie.push(this.getEmptySerie(73));
    this.serie.push(this.getEmptySerie(79));
    this.serie.push(this.getEmptySerie(85));
    this.serie.push(this.getEmptySerie(91));
  }

  ngOnInit() {}

  private getEmptySerie(startN: number): Serie {
    return [
      { Numero: startN + 0, Righe: this.getEmptyRows() },
      { Numero: startN + 1, Righe: this.getEmptyRows() },
      { Numero: startN + 2, Righe: this.getEmptyRows() },
      { Numero: startN + 3, Righe: this.getEmptyRows() },
      { Numero: startN + 4, Righe: this.getEmptyRows() },
      { Numero: startN + 5, Righe: this.getEmptyRows() }
    ];
  }

  private getEmptyRows(): Array<number[]> {
    return [
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null]
    ];
  }
}
