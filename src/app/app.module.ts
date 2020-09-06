import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ServiceChgColorDirective } from './service/service-chg-color.directive';
import { WhyusComponent } from './whyus/whyus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBookOpen, faLightbulb, faHandshake, faHeart, faChartBar, faComments, faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToggleSideNav } from './navigation/toggleSideNav.service';
import { NavContent } from './navigation/nav-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeResolver } from './home/home.resolver.service';
import { FooterComponent } from './footer/footer.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { HomeWhyusComponent } from './home/home-whyus/home-whyus.component';
import { HomeFeedbackComponent } from './home/home-feedback/home-feedback.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { GalleryModule } from './gallery/gallery.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "home" },
  { path: 'home', component: HomeComponent , resolve:{images: HomeResolver} },
  { path: 'lienhe',component:ContactComponent },
  { path: 'dichvu', component:ServiceComponent },
  { path: 'gioithieu', component: AboutComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ServiceChgColorDirective,
    WhyusComponent,
    SideNavComponent,
    NavContent,
    FooterComponent,
    HomeAboutComponent,
    HomeServiceComponent,
    HomeWhyusComponent,
    HomeFeedbackComponent,
    HomeVideoComponent,
  ],
  imports: [
    
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPageScrollModule,
    FontAwesomeModule,
    GalleryModule,

  ],
  providers: [ToggleSideNav, HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, private route: ActivatedRoute) {
    library.addIcons(faBookOpen, faLightbulb, faHandshake, faComments, faSmileWink, faHeart, faChartBar);
  }
}
