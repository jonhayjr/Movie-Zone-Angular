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
  movies$: any = [];
  defaultSearch: string = 'marvel'

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies$ = this.getMovies(this.defaultSearch);
  }

  getMovies(search:string) {
    return this.movieService.getMovies(search)
    .pipe(
      map((res:any) => res.Search)
    )
  }


  handleMovieSearch(searchValue:any) {
    this.movies$ = this.getMovies(searchValue);
  }
}
