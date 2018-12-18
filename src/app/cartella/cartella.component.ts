import { Component, OnInit, Input } from "@angular/core";
import { Cartella } from "src/lib/Cartella";
@Component({
  selector: "tdn-cartella",
  templateUrl: "./cartella.component.html",
  styleUrls: ["./cartella.component.styl"]
})
export class CartellaComponent implements OnInit {
  /** proprietà cartella */
  @Input()
  car: Cartella;

  public get Numero() {
    return this.car ? this.car.Numero : 0;
  }

  public get Righe() {
    if (this.car) {
      return this.car.Righe;
    }
    return [];
  }
  constructor() {}

  ngOnInit() {}
}
