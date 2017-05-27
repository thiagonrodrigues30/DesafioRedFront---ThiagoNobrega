import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {

	@Input('title') title: string = 'IMDb Info';
	@Input('link') link: string = '#';
	@Input('max-size') maxSize: number = 5;
	@Input('list') list: any[] = [];
  @Input('indexed') indexed: boolean = false;
  @Input('time') time: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
