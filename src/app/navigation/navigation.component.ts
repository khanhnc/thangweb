import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        this.navbar.nativeElement.classList.add("bg-dark");
      } else {
        this.navbar.nativeElement.classList.remove("bg-dark");
      }
    };
  }
}
