import { Component, OnInit, Inject, ViewChild, ElementRef, Output, AfterViewInit, HostListener } from '@angular/core';
import { PageScrollInstance } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { faPhoneAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleSideNav } from './toggleSideNav.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;

  activeNavItem = 'home';
  pageScrollInstance: PageScrollInstance;

  constructor(private toogleSideNavService: ToggleSideNav, @Inject(DOCUMENT) private document: any) {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.navbar.nativeElement.classList.add("header-scrolled");
      } else {
        this.navbar.nativeElement.classList.remove("header-scrolled");
      }
    };
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
    // this.setIconColor()
  }
  // setIconColor() {
  //   let setColor = setInterval(() => {
  //     if (this.document.getElementById("logo").contentDocument.getElementsByTagName("path").length) {
  //       let iconElements = this.document.getElementById("logo").contentDocument.getElementsByTagName("path");
  //       iconElements[0].style.fill = "red";
  //       iconElements[1].style.fill = "orange";
  //       iconElements[2].style.fill = "yellow";
  //       iconElements[3].style.fill = "green";
  //       iconElements[4].style.fill = "blue";
  //       iconElements[5].style.fill = "purple";
  //       clearInterval(setColor);
  //     }
  //   }, 50)
  // }

  openSideNav() {
    this.toogleSideNavService.openSideNav.emit();
    this.openSideNavStatus = true;
    this.toogleSideNavService.openStatus = true;
  }

}
