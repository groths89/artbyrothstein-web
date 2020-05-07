import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'exhibits', component: ExhibitsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
