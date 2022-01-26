import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(search: string) {
    return this.http.get(`https://www.omdbapi.com/?apiKey=${environment.apiKey}&type=movie&s=${search}`)
  }
}
