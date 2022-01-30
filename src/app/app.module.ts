import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieTileComponent,
    FilterBoxComponent,
    FavoriteMoviesComponent,
    FooterComponent,
    SpinnerComponent,
    MovieViewComponent,
    AboutViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
