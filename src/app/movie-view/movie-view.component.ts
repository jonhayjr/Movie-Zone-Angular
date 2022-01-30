import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {
  movies: any[] = [];
  defaultSearch: string = 'marvel';
  favoriteMovies: any[] = [];
  isLoading: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies(this.defaultSearch);
  }

  getMovies(search:string) {
    //Set isLoading to true 
    this.isLoading = true;

    return this.movieService.getMovies(search)
    .pipe(
      map((res:any) => res.Search)
    )
    .subscribe(data => {
      this.movies = data;
      this.isLoading = false;
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
