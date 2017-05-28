import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	listWeek: any[] = [];
  listBoxOffice: any[] = [];
  listRealTime: any[] = [];
  listNews: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.listNews = this.homeService.getNews();
  	this.listWeek = this.homeService.getWeekMovies();
    this.listBoxOffice = this.homeService.getBoxOffice();
    this.listRealTime = this.homeService.getRealTime();
  }

}
