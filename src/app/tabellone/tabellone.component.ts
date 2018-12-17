import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tdn-tabellone",
  templateUrl: "./tabellone.component.html",
  styleUrls: ["./tabellone.component.styl"]
})
export class TabelloneComponent implements OnInit {
  Numbers = Array<number>(90).fill(0).map((v, i) => i + 1);
  constructor() { }

  ngOnInit() {
  }

}
