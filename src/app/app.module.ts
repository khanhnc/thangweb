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
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceChgColorDirective } from './service/service-chg-color.directive';
import { WhyusComponent } from './whyus/whyus.component';


import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookOpen, faLightbulb, faHandshake, faHeart, faChartBar, faComments, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { Route } from '@angular/compiler/src/core';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToggleSideNav } from './navigation/toggleSideNav.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "**", redirectTo: "/" }

]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ServiceComponent,
    ContactComponent,
    ServiceChgColorDirective,
    WhyusComponent,
    SideNavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgxPageScrollModule,
    FontAwesomeModule,
  ],
  providers: [ToggleSideNav],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, private route: ActivatedRoute) {
    library.addIcons(faBookOpen, faLightbulb, faHandshake, faComments, faSmileWink, faHeart, faChartBar);
    console.log(this.route.snapshot)
    if (this.route.snapshot.queryParams['fbclid']) {
      console.log("true")
      //do your stuff. example: console.log('id: ', this.route.snapshot.queryParams['id']);
 }
  }
}
