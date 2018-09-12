import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../model/video.model.model';

@Component({
  selector: 'app-youtube-card',
  templateUrl: './youtube-card.component.html',
  styleUrls: ['./youtube-card.component.scss']
})
export class YoutubeCardComponent implements OnInit {
  @Input() video: Video;

  constructor() { }

  ngOnInit() {
  }

}
