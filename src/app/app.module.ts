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
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopMenuComponent,
    AppFeaturedPaintingComponent,
    AppFooterComponent,
    AppWelcomeComponent,
    AppNewestExhibitComponent,
    AppPortfolioSamplesComponent,
    HomeComponent,
    GalleryComponent,
    ExhibitsComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
