import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  OnDestroy
} from '@angular/core';
import { Video } from '../../model/video.model.model';
import { YouTubeService } from '../services/youtube.service';
import { Observable, fromEvent, Subject } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-input-search-youtube',
  templateUrl: './input-search-youtube.component.html',
  styleUrls: ['./input-search-youtube.component.scss']
})
export class InputSearchYoutubeComponent implements OnInit, OnDestroy {
  @Output() public isVideo: EventEmitter<boolean>;
  @Output() public resultVideos: EventEmitter<Video[]>;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private youtubeService: YouTubeService,
    private elem: ElementRef
  ) {
    this.isVideo = new EventEmitter<boolean>();
    this.resultVideos = new EventEmitter<Video[]>();
  }
  @HostListener('keyup') onkeyup() {
    return this.elem.nativeElement.querySelector('input');
  }

  public ngOnInit(): void {
    fromEvent(this.onkeyup(), 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(200),
        tap(() => this.isVideo.emit(true)),
        map((query: string) => this.youtubeService.searchVideos(query)),
        switchAll(),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (results: any) => {
          // success
          this.isVideo.emit(false);
          this.resultVideos.emit(results);
        },
        (error: any) => {
          // error
          console.log(error);
          this.isVideo.emit(false);
        },
        () => {
          // completed
          this.isVideo.emit(false);
        }
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
