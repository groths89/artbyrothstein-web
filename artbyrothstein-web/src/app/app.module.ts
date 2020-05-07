import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopMenuComponent } from './app-top-menu/app-top-menu.component';
import { AppFeaturedPaintingComponent } from './app-featured-painting/app-featured-painting.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppWelcomeComponent } from './app-welcome/app-welcome.component';
import { AppNewestExhibitComponent } from './app-newest-exhibit/app-newest-exhibit.component';
import { AppPortfolioSamplesComponent } from './app-portfolio-samples/app-portfolio-samples.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopMenuComponent,
    AppFeaturedPaintingComponent,
    AppFooterComponent,
    AppWelcomeComponent,
    AppNewestExhibitComponent,
    AppPortfolioSamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
