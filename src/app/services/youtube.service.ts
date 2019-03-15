import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../model/video.model.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// AIzaSyDReFQaM6T5De7yjqWS_1OkBuI30uZ4lzE
export const YOUTUBE_API_KEY = 'AIzaSyDReFQaM6T5De7yjqWS_1OkBuI30uZ4lzE';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeService {

  constructor(private http: HttpClient, @Inject(YOUTUBE_API_KEY) private apikey: string,
  @Inject(YOUTUBE_API_URL) private apiUrl: string) { }

  public searchVideos(query: string): Observable<Video> {
    const params: string = [
      `q=${query}`,
      `key=${this.apikey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl = `${this.apiUrl}?${params}`;
    return this.getVideosHttpCall(queryUrl);
  }

  public getVideosHttpCall(query: string): Observable<Video> {
    return this.http
    .get(query)
    .pipe(map(response => {
      return this.mapAllVideos(response);
    }));
  }

  public mapAllVideos(response: any): Video {
    return response['items'].map(item => {
      return this.mapVideoAttributes(item);
    });
  }

  public mapVideoAttributes(item: any): Video {
    return new Video({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnailUrl: item.snippet.thumbnails.high.url
    });
  }
}
