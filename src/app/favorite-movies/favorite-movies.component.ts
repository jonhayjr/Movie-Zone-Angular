import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  @Input() favoriteMovies: any = [];
  @Output() removeFavoriteEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeFavorite(movie: any) {
    this.removeFavoriteEvent.emit(movie);
  }

}
