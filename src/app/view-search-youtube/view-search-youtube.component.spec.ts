import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchYoutubeComponent } from './view-search-youtube.component';

describe('ViewSearchYoutubeComponent', () => {
  let component: ViewSearchYoutubeComponent;
  let fixture: ComponentFixture<ViewSearchYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSearchYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
