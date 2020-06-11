import { Component, OnInit, Inject, ViewChild, ElementRef, Output } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'protractor';
import { ToggleSideNav } from './toggleSideNav.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('home') home: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('service') service: ElementRef;
  @ViewChild('gallery') gallery: ElementRef;
  @ViewChild('contact') contact: ElementRef;

  activeNavItem = 'home';
  pageScrollInstance: PageScrollInstance;

  constructor(private toogleSideNavService: ToggleSideNav, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
    // this.pageScrollService.stop.subscribe(ins => {
    //   console.log(ins)
    // })
  }

  faPhone = faPhoneAlt;

  ngOnInit(): void {
    // window.addEventListener('scroll', function() {
    //   var element = document.querySelector('#about');
    //   var position = element.getBoundingClientRect();

    //   // checking whether fully visible
    //   if(position.top >= 0 && position.bottom <= window.innerHeight) {
    //     console.log('yahoo', window.innerHeight, position.top, position.bottom);
    //   }

    //   // checking for partial visibility
    //   if(position.top < window.innerHeight && position.bottom >= 0) {
    //     console.log('No', window.innerHeight, position.top, position.bottom);
    //   }
    // });
    // window.onscroll = () => {
    //   if (window.scrollY > 50) {
    //     this.navbar.nativeElement.classList.add("bg-dark");
    //   } else {
    //     this.navbar.nativeElement.classList.remove("bg-dark");
    //   }
    // };
  }
  public scrollTo(id) {
    this.pageScrollInstance = this.pageScrollService.create({
      document: this.document,
      scrollTarget: `#` + id,
      easingLogic: this.easing
    }
    )
    this.pageScrollService.start(this.pageScrollInstance);
    this.activeNavItem = id;
    // console.log( 
    //   this.pageScrollInstance.getCurrentOffset()
    //   )
  }

  openSideNav() {
    this.toogleSideNavService.toggleSideNav.emit();
  }


  public easing = (t: number, b: number, c: number, d: number): number => {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  //  isInViewport = function (position) {
  //   if(position.top >= 0 && position.bottom <= window.innerHeight) {
  //     console.log('Element is fully visible in screen');
  //   }

  //   // checking for partial visibility
  //   if(position.top < window.innerHeight && position.bottom >= 0) {
  //     console.log('Element is partially visible in screen');
  //   }
  // };
}
