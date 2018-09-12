import { Component, OnInit } from '@angular/core';
import { Video } from '../../model/video.model.model';

@Component({
  selector: 'app-view-videos-youtube',
  templateUrl: './view-search-youtube.component.html',
  styleUrls: ['./view-search-youtube.component.scss']
})
export class ViewSearchYoutubeComponent implements OnInit {
  public isVideo: boolean;
  public resultVideos: Video[];

  constructor() { }

  public ngOnInit() {
  }

  public updateResults(results: Video[]): void {
    this.resultVideos = results;
  }

}
