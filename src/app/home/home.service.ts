import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

	listWeek: any[] = [{
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
		}, {
			title: 'Fifty Shades of Black',
			info: 'Comedy'
		}
	];

	listBoxOffice: any[] = [{
			title: 'Star Wars: The Force Awakens',
			info: '$750.2M Action, Adventure, Fantasy'
		}, {
			title: 'The Martian',
			info: '$225.9M Adventure, Drama, Sci-Fi'
		}, {
			title: 'James Bond 007 - Spectre',
			info: '$197.8M Action, Adventure, Thriller'
		}, {
			title: 'The Hateful Eight',
			info: '$30.6M Comedy, Drama, Mystery'
		}, {
			title: 'The Revenant',
			info: '$1.3M Adventure, Drama, Thriller'
		}
	];

	listRealTime: any[] = [{
			title: '\'Fast and Furious 8\' Wants to Shoot in Cuba',
			info: 'Universal\'s \'Fast and Furious\' franchise may be going where no major studio film ',
			time: '12 min ago'
		}, {
			title: '\'The Martian\' Land Writers Guild Normia',
			info: 'The Writers Guild of America has nominated \'Bridge of Spiesz\', \'Sicario\',',
			time: '45 min ago'
		}
	];

  constructor() { }

  getWeekMovies() {
		return this.listWeek;
  }

  getBoxOffice() {
  	return this.listBoxOffice;
  }

  getRealTime() {
  	return this.listRealTime;
  }

  // TODO metodo de teste, deletar depois
  addMovie() {
  	this.listWeek.push({
			title: 'Teste Thiago',
			info: 'Data, Binding, Real, Time'});
  }

}
