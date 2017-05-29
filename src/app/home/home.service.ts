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

	listNews: any[] = [{
		image: 'https://s-media-cache-ak0.pinimg.com/736x/27/3e/f5/273ef58ee4cb6d3ee22c4475ad9b92dc.jpg',
		title: 'Nominations Announced For 20th Art Directors Guild Awards',
		info: 'Nominees for the Art Directors Guild (Adg, Iatse Local 800) 20th Annual Excellence in Production Design Awards in 11 categories of Production Design for theatrical motion pictures, television, commercials and music videos were announced by Adg Council Chair Marcia Hinds and Awards Producer Thomas Wilkins.',
		link: '#',
		time: '3 hours ago',
		category: 'Entertainment',
		categoryLink: '#',
		subCategory: 'Celebrity',
		subCategoryLink: '#'
	}, {
		image: 'https://cdn.miramax.com/media/_versions/Levon-Biss_Quentin-Tarantino_071212-2894_V1_square_md.jpg',
		title: 'Tarantino Receives a Star on the Hollywood Walk of Fame',
		info: 'LAPD is noticeably scarce as Samuel L. Jackson and numerous callaborators gather along with ...',
		link: '#',
		time: '',
		category: '',
		categoryLink: '',
		subCategory: '',
		subCategoryLink: ''
	}, {
		image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTU3OTIwNDg3M15BMl5BanBnXkFtZTgwNTA5MDM1NjE@._V1_.jpg',
		title: 'Can \'Anomalisa\' take down Pixar rivals \'Inside Out\'',
		info: 'For the first time in Oscar history, two Pixar films will be battling it out for Best Animated Feature in the same year: the upcoming "The Good Dinosaur" and summer smash hit "Inside Out." Is it possible that these two rivals might cancel each other out, thereby ensuring that Paramount\'s critical darling \"Anomalisa\" will claim Oscar gold? ...',
		link: '#',
		time: '',
		category: '',
		categoryLink: '',
		subCategory: '',
		subCategoryLink: ''
	}, {
		image: 'http://online.kinoshi.net/images/online_kinoshi_net/screens/i6yii6y-smotret-interesnyy-onlayn-film-vse-nachinaetsya-zavtra-2016.jpg',
		title: 'Movie Adaptation of Mark Millar Comic Superior Finds Writers',
		info: 'Fox is moving ahead with its fantasy movie “Superior,” bringing on the writing team of Brandon and Phillip Murphy to adapt Mark Millar’s comic book series, Variety has learned exclusively.',
		link: '#',
		time: '',
		category: '',
		categoryLink: '',
		subCategory: '',
		subCategoryLink: ''
	}, {
		image: 'http://estaticos02.elmundo.es/blogs/elmundo/sinnoticiasdedior/imagenes_posts/2014/01/14/87195_540x354.jpg',
		title: 'Cate Blanchett to Be Honored by Costume Designers Guild',
		info: 'Cate Blanchett will receive the Lacoste Spotlight Award at the 18th Costume Designers Guild Awards on Feb. 23 at the Beverly Hilton Hotel.',
		link: '#',
		time: '',
		category: '',
		categoryLink: '',
		subCategory: '',
		subCategoryLink: ''
	}
	];

	info1: any = {
		image: '/assets/Oscars-Wallpapers-3.jpg',
		title: 'ACADEMY AWARDS',
		infoTitle: 'Actors and Actresses Nominated for the Academy Awards',
		info: 'Nominations will be announced on January 14, 2016. Chris Rock will return as host for the ceremony which will air live on Sunday...'
	}

	info2: any = {
		image: '/assets/starwars.jpg',
		title: 'Interview',
		infoTitle: 'Daisy Ridley, Star Wars Cast Talk',
		info: 'The cast members of Star Wars: The Force Awakens sit down with IMDb to give you the lowdown on all their characters.'
	}

  constructor() { }

  getNews() {
  	return this.listNews;
  }

  getWeekMovies() {
		return this.listWeek;
  }

  getBoxOffice() {
  	return this.listBoxOffice;
  }

  getRealTime() {
  	return this.listRealTime;
  }

  getInfo1() {
  	return this.info1;
  }

  getInfo2() {
  	return this.info2;
  }

}
