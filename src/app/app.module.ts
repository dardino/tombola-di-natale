import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartellaComponent } from "./cartella/cartella.component";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PremiComponent } from "./premi/premi.component";
import { MatInputModule, MatCheckboxModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CartellaComponent,
    TabelloneComponent,
    GeneratoreComponent,
    PremiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
