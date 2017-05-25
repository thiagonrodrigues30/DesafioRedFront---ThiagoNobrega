import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarMainComponent } from './core/navbar-main/navbar-main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    MaterializeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
