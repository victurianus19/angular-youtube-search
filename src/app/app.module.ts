import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YoutubeCardComponent } from './youtube-card/youtube-card.component';
import { ViewSearchYoutubeComponent } from './view-search-youtube/view-search-youtube.component';
import { InputSearchYoutubeComponent } from './input-search-youtube/input-search-youtube.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeService, YOUTUBE_API_KEY, YOUTUBE_API_URL } from './services/youtube.service';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeCardComponent,
    ViewSearchYoutubeComponent,
    InputSearchYoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: YouTubeService, useClass: YouTubeService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
