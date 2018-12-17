import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tdn-cartella",
  templateUrl: "./cartella.component.html",
  styleUrls: ["./cartella.component.styl"]
})
export class CartellaComponent implements OnInit {
  cartella: ICartella;

  constructor() {}

  ngOnInit() {}
}

export interface ICartella {
  Numero: number;
  Righe: Array<number[]>;
}
