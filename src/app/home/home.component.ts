import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	list: any[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  	this.list = this.homeService.getWeekMovies();
  }

  // TODO metodo de teste, deletar depois
  addMovie() {
  	this.homeService.addMovie();
  }

}
