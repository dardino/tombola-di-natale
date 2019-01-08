import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  if (location.protocol !== "https:") {
    const newurl = new URL(location.href);
    newurl.protocol = "https:";
    location.href = newurl.href;
  }
  enableProdMode();
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
