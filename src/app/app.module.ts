import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CartellaComponent } from "./cartella/cartella.component";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PremiComponent } from "./premi/premi.component";
import {
  MatInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatListModule,
  MatIconModule
} from "@angular/material";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

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
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
