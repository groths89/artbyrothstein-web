import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewestExhibitComponent } from './app-newest-exhibit.component';

describe('AppNewestExhibitComponent', () => {
  let component: AppNewestExhibitComponent;
  let fixture: ComponentFixture<AppNewestExhibitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNewestExhibitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewestExhibitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
