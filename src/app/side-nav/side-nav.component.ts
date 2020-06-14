import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ToggleSideNav } from '../navigation/toggleSideNav.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sideNav') sideNav: ElementRef;

  constructor(private toggleSideNavService: ToggleSideNav) { }

  ngOnInit(): void {
    this.toggleSideNavService.openSideNav.subscribe(() => this.openSideNav());
    this.toggleSideNavService.closeSideNav.subscribe(() => this.closeSideNav());

  }

  openSideNav() {
    this.sideNav.nativeElement.style.width = "100%";
  }

  closeSideNav() {
    this.sideNav.nativeElement.style.width = "0";
  }
}
