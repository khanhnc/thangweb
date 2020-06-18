import { Component, Inject, NgZone, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('spinnerElement')

  loading = true

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {

  this.router.events.subscribe((e : RouterEvent) => {
       this.navigationInterceptor(e);
     })
    // window.addEventListener('load', function () {
    //   alert("It's loaded!")
    // })
    // console.log(this.route.snapshot)
    // setTimeout(() => {
    //   document.getElementById('nb-global-spinner').style.display = 'none';
    // }, 2000);
  }

  ngOnInit() { }

// Shows and hides the loading spinner during RouterEvent changes
navigationInterceptor(event: RouterEvent): void {
  if (event instanceof NavigationStart) {
    this.loading = true
  }
  if (event instanceof NavigationEnd) {
    this.loading = false
  }

  // Set loading state to false in both of the below events to hide the spinner in case a request fails
  if (event instanceof NavigationCancel) {
    this.loading = false
  }
  if (event instanceof NavigationError) {
    this.loading = false
  }
}
}