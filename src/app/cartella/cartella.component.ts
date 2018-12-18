import { Component, OnInit } from "@angular/core";
import { Cartella } from "src/lib/Cartella";
@Component({
  selector: "tdn-cartella",
  templateUrl: "./cartella.component.html",
  styleUrls: ["./cartella.component.styl"]
})
export class CartellaComponent implements OnInit {
  /** proprietà cartella */
  cartella: Cartella;

  public get Numero() {
    return this.cartella ? this.cartella.Numero : 0;
  }

  public get Righe() {
    if (this.cartella) {
      return this.cartella.Righe;
    }
    return [];
  }
  constructor() {}

  ngOnInit() {}
}
