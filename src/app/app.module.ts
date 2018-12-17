import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartellaComponent } from "./cartella/cartella.component";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";

@NgModule({
  declarations: [
    AppComponent,
    CartellaComponent,
    TabelloneComponent,
    GeneratoreComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
