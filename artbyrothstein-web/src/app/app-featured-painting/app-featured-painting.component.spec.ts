import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeaturedPaintingComponent } from './app-featured-painting.component';

describe('AppFeaturedPaintingComponent', () => {
  let component: AppFeaturedPaintingComponent;
  let fixture: ComponentFixture<AppFeaturedPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFeaturedPaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFeaturedPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
