import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

	@Input('list') news: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
