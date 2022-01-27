import { Component } from '@angular/core';
import { MovieService } from './movie-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Zone';
  movies: any = [];
  defaultSearch: string = 'marvel';
  favoriteMovies: any = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies(this.defaultSearch);
  }

  getMovies(search:string) {
    return this.movieService.getMovies(search)
    .pipe(
      map((res:any) => res.Search)
    )
    .subscribe(data => {
      this.movies = data;
    })
  }


  handleMovieSearch(searchValue:any) {
    this.getMovies(searchValue);
  }

  addToFavorites(movie: any) {
    this.favoriteMovies.push(movie);
  }

  removeFavoriteMovie(movie: any) {
    const currentFavorites = [...this.favoriteMovies];

    const newFavorites = currentFavorites.filter(m => {
      return m.Title !== movie.Title;
    })

    this.favoriteMovies = newFavorites;
  }
}
