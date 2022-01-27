import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
  @Input() favoriteMovies: any[];
  
  constructor() { }

  ngOnInit(): void {
  }


}
