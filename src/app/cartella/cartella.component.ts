import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tdn-cartella",
  templateUrl: "./cartella.component.html",
  styleUrls: ["./cartella.component.styl"]
})
export class CartellaComponent implements OnInit {
  /** proprietà cartella */
  cartella: ICartella;
  public get Righe() {
    if (this.cartella) {
      return this.cartella.Righe;
    }
    return [];
  }
  constructor() {}

  ngOnInit() {}
}

export interface ICartella {
  Numero: number;
  Righe: Array<number[]>;
}
