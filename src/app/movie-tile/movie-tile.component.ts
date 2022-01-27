import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {

  @Input() movie:any;
  @Output() addMovieEvent = new EventEmitter();
  @Output() removeMovieEvent = new EventEmitter();
  
  addedToFavorites: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  addMovie() {
    this.addMovieEvent.emit(this.movie);
    this.addedToFavorites = true;
  }

  removeMovie() {
    this.removeMovieEvent.emit(this.movie);
    this.addedToFavorites = false;
  }

}
