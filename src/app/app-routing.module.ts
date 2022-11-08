import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  // { path: "login", component: LoginComponent },
  { path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
