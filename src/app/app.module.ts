import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';
import { PagesModule } from './pages/pages.module';
// PagesModule

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
