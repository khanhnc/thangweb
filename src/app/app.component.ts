import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testSrc: SafeUrl
  constructor(@Inject(DOCUMENT) document, private route: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {

    // window.addEventListener('load', function () {
    //   alert("It's loaded!")
    // })
    // console.log(this.route.snapshot)
    // setTimeout(() => {
    //   document.getElementById('nb-global-spinner').style.display = 'none';
    // }, 2000);
  }

  ngOnInit() {
  

  }
}