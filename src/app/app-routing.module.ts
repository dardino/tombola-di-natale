import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";

const routes: Routes = [
  { path: "tabellone", component: TabelloneComponent },
  { path: "generatore", component: GeneratoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
