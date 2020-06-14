import { Component, OnInit, Inject, ViewChild, ElementRef, Output, AfterViewInit, HostListener } from '@angular/core';
import { PageScrollInstance } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { faPhoneAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleSideNav } from './toggleSideNav.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activeNavItem = 'home';
  pageScrollInstance: PageScrollInstance;

  constructor(private toogleSideNavService: ToggleSideNav, @Inject(DOCUMENT) private document: any) {
  }

  faPhone = faPhoneAlt;
  faBars = faBars;

  openSideNavStatus = false

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 969 && this.toogleSideNavService.openStatus) {
      this.toogleSideNavService.closeSideNav.emit();
      this.openSideNavStatus = false;
      this.toogleSideNavService.openStatus = false;
    }
  }


  ngOnInit(): void {
  }


  openSideNav() {
    this.toogleSideNavService.openSideNav.emit();
    this.openSideNavStatus = true;
    this.toogleSideNavService.openStatus = true;

  }

}
