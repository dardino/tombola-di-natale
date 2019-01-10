import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TabelloneComponent } from "./tabellone/tabellone.component";
import { GeneratoreComponent } from "./generatore/generatore.component";
import { PremiComponent } from "./premi/premi.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "tabellone", component: TabelloneComponent },
  { path: "generatore", component: GeneratoreComponent },
  { path: "premi", component: PremiComponent },
  { path: "", redirectTo: "/premi", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
