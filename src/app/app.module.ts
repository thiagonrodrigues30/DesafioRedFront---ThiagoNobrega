import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarMainComponent } from './core/navbar-main/navbar-main.component';
import { SidebarMainComponent } from './core/sidebar-main/sidebar-main.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    SidebarMainComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    MaterializeModule,
    
  ],
  providers: [HomeService],
  exports: [SidebarMainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
