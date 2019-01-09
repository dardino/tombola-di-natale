import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";
import { PremiComponent } from "./premi/premi.component";

const routes: Routes = [
  { path: "", redirectTo: "/premi", pathMatch: "full" },
  { path: "tabellone", component: TabelloneComponent },
  { path: "generatore", component: GeneratoreComponent },
  { path: "premi", component: PremiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
