import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(search: string) {
    return this.http.get(`https://www.omdbapi.com/?apiKey=${process.env.apiKey}&type=movie&s=${search}`)
  }
}
