import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortfolioSamplesComponent } from './app-portfolio-samples.component';

describe('AppPortfolioSamplesComponent', () => {
  let component: AppPortfolioSamplesComponent;
  let fixture: ComponentFixture<AppPortfolioSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPortfolioSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPortfolioSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
