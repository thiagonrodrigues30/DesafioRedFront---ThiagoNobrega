import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

	list: any[] = [{
			title: 'Band of Robbers',
			info: 'Adventure, Comedy, Crime, Thriller'
		}, {
			title: 'The Benefactor',
			info: 'Drama'
		}, {
			title: 'Dirty Grandpa',
			info: 'Comedy'
		}, {
			title: 'The 5th Wave',
			info: 'Adventure, Sci-Fi, Thriller'
		}
	];

  constructor() { }

  getWeekMovies() {
		return this.list;
  }

  // TODO metodo de teste, deletar depois
  addMovie() {
  	this.list.push({
			title: 'Teste Thiago',
			info: 'Data, Binding, Real, Time'});
  }

}
