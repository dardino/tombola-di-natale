import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tdn-premi",
  templateUrl: "./premi.component.html",
  styleUrls: ["./premi.component.styl"]
})
export class PremiComponent implements OnInit {
  private totalAmount = 0    ;  get TotalAmount() { return this.totalAmount;  }  set TotalAmount(v) { this.totalAmount = v; }
  private ambo1       = true ;  get Ambo1      () { return this.ambo1      ;  }  set Ambo1      (v) { this.ambo1       = v; }
  private ambo2       = false;  get Ambo2      () { return this.ambo2      ;  }  set Ambo2      (v) { this.ambo2       = v; }
  private terno       = true ;  get Terno      () { return this.terno      ;  }  set Terno      (v) { this.terno       = v; }
  private quaterna    = true ;  get Quaterna   () { return this.quaterna   ;  }  set Quaterna   (v) { this.quaterna    = v; }
  private cinquina    = true ;  get Cinquina   () { return this.cinquina   ;  }  set Cinquina   (v) { this.cinquina    = v; }
  private tombola     = true ;  get Tombola    () { return this.tombola    ;  }  set Tombola    (v) { this.tombola     = v; }
  private tombolino   = true ;  get Tombolino  () { return this.tombolino  ;  }  set Tombolino  (v) { this.tombolino   = v; }

  constructor() {}

  ngOnInit() {}
}
