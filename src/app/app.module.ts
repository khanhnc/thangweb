import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
const routes : Routes = [
  {path:'', component: HomeComponent},
  {path:'gallery', component:GalleryComponent },
  {path:'contact', component:ContactComponent },
  {path:'service', component:ServiceComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgxPageScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
