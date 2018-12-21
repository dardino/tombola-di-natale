import { Component, OnInit } from "@angular/core";
import { Serie, Generator } from "src/lib/GeneratoreCartelle";
import { Cartella } from "src/lib/Cartella";
import * as jsPDF from "jspdf";

@Component({
  selector: "tdn-generatore",
  templateUrl: "./generatore.component.html",
  styleUrls: ["./generatore.component.styl"]
})
export class GeneratoreComponent implements OnInit {
  serie: Array<Serie> = [];

  constructor() {
    const p1  = this.getEmptySerie(1 );    this.serie.push(p1 );    Generator.TryToFillSerie(p1 );
    const p2  = this.getEmptySerie(7 );    this.serie.push(p2 );    Generator.TryToFillSerie(p2 );
    const p3  = this.getEmptySerie(13);    this.serie.push(p3 );    Generator.TryToFillSerie(p3 );
    const p4  = this.getEmptySerie(19);    this.serie.push(p4 );    Generator.TryToFillSerie(p4 );
    const p5  = this.getEmptySerie(25);    this.serie.push(p5 );    Generator.TryToFillSerie(p5 );
    const p6  = this.getEmptySerie(31);    this.serie.push(p6 );    Generator.TryToFillSerie(p6 );
    const p7  = this.getEmptySerie(37);    this.serie.push(p7 );    Generator.TryToFillSerie(p7 );
    const p8  = this.getEmptySerie(43);    this.serie.push(p8 );    Generator.TryToFillSerie(p8 );
    const p9  = this.getEmptySerie(49);    this.serie.push(p9 );    Generator.TryToFillSerie(p9 );
    const p10 = this.getEmptySerie(55);    this.serie.push(p10);    Generator.TryToFillSerie(p10);
    const p11 = this.getEmptySerie(61);    this.serie.push(p11);    Generator.TryToFillSerie(p11);
    const p12 = this.getEmptySerie(67);    this.serie.push(p12);    Generator.TryToFillSerie(p12);
    const p13 = this.getEmptySerie(73);    this.serie.push(p13);    Generator.TryToFillSerie(p13);
    const p14 = this.getEmptySerie(79);    this.serie.push(p14);    Generator.TryToFillSerie(p14);
    const p15 = this.getEmptySerie(85);    this.serie.push(p15);    Generator.TryToFillSerie(p15);
    const p16 = this.getEmptySerie(91);    this.serie.push(p16);    Generator.TryToFillSerie(p16);
  }

  // CreaPdf() {
  //   const doc = new jsPDF();
  //   doc.text("Hello world!", 10, 10);
  //   doc.save("a4.pdf");
  // }

  ngOnInit() {

  }

  private getEmptySerie(startN: number): Serie {
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
