import { Component, OnInit } from "@angular/core";
import { ICartella } from "../cartella/cartella.component";

@Component({
  selector: "tdn-generatore",
  templateUrl: "./generatore.component.html",
  styleUrls: ["./generatore.component.styl"]
})
export class GeneratoreComponent implements OnInit {
  serie: Array<Serie> = [];

  constructor() {}

  ngOnInit() {
    this.serie.push(this.getEmptySerie(1));
  }

  getEmptySerie(startN: number): Serie {
    return [
      { Numero: startN + 0, Righe: [] },
      { Numero: startN + 1, Righe: [] },
      { Numero: startN + 2, Righe: [] },
      { Numero: startN + 3, Righe: [] },
      { Numero: startN + 4, Righe: [] },
      { Numero: startN + 5, Righe: [] }
    ];
  }
}
type Serie = [ICartella, ICartella, ICartella, ICartella, ICartella, ICartella];
