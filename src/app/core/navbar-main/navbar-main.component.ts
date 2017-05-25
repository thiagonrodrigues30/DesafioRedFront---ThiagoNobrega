import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css']
})
export class NavbarMainComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  	//$(".button-collapse").sideNav();
  }

}
