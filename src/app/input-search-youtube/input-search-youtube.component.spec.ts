import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchYoutubeComponent } from './input-search-youtube.component';

describe('InputSearchYoutubeComponent', () => {
  let component: InputSearchYoutubeComponent;
  let fixture: ComponentFixture<InputSearchYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
